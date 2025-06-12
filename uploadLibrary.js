const admin = require('firebase-admin');
const fs = require('fs');

// Load service account
const serviceAccount = require('./serviceAccount.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadCollection(jsonFile, collectionName) {
  const data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  for (const item of data) {
    // Use exercise/muscle name as document ID for idempotency
    const docId = (item.name || item.exercise || '').replace(/[^a-zA-Z0-9]/g, '_');
    await db.collection(collectionName).doc(docId).set(item);
    console.log(`Uploaded to ${collectionName}: ${item.name || item.exercise}`);
  }
}

async function main() {
  await uploadCollection('exercises.json', 'exercises');
  await uploadCollection('muscleGroups.json', 'muscleGroups');
  console.log('Upload complete!');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 