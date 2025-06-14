const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const COLLECTION = 'workoutLogs';

function makeNewId(log) {
  // Use ISO string for timestamp, fallback to log.date, fallback to now
  const timestamp = log.date || new Date().toISOString();
  // Remove spaces and special chars from exercise name
  const exercise = (log.exercise || 'unknown').replace(/[^a-zA-Z0-9]/g, '');
  const userID = log.userID || 'nouser';
  return `${timestamp}_${exercise}_${userID}`;
}

function fixYear(str) {
  if (!str) return str;
  return str.replace('2024', '2025');
}

async function migrate() {
  const snapshot = await db.collection(COLLECTION).get();
  const toMigrate = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    const oldId = doc.id;
    const oldDate = data.date;
    // Only migrate if 2024 is in the doc ID or date
    if ((oldId && oldId.includes('2024')) || (oldDate && oldDate.includes('2024'))) {
      // Fix the date field
      const newDate = fixYear(oldDate);
      const newId = fixYear(oldId);
      // Only migrate if newId is different
      if (newId !== oldId) {
        toMigrate.push({ oldId, newId, data: { ...data, date: newDate } });
      }
    }
  });

  console.log(`Found ${toMigrate.length} docs to fix year from 2024 to 2025.`);

  // 1. Write new docs
  for (const { newId, data } of toMigrate) {
    await db.collection(COLLECTION).doc(newId).set(data);
    console.log(`Created new doc: ${newId}`);
  }

  // 2. Delete old docs (disabled for safety)
  // for (const { oldId } of toMigrate) {
  //   await db.collection(COLLECTION).doc(oldId).delete();
  //   console.log(`Deleted old doc: ${oldId}`);
  // }

  console.log('Year fix migration complete!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});