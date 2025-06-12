const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const exercises = JSON.parse(fs.readFileSync('workoutLibrary_migrated.json', 'utf8'));

async function importWorkoutLibrary() {
  for (const ex of exercises) {
    // Use ex.id if you want to preserve document IDs, otherwise use add()
    await db.collection('workoutLibrary').doc(ex.id).set(ex);
    console.log('Imported', ex.name);
  }
  console.log('Import complete.');
}

importWorkoutLibrary(); 