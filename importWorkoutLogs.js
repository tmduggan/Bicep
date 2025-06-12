const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

// Initialize Firebase Admin
initializeApp({
  credential: applicationDefault(),
});
const db = getFirestore();

// Read logs from JSON file
const logs = JSON.parse(fs.readFileSync('workoutLogs.json', 'utf8'));

async function importLogs() {
  for (const log of logs) {
    await db.collection('workoutLogs').add(log);
    console.log('Imported log for', log.exercise, log.date);
  }
  console.log('All logs imported!');
}

importLogs().catch(console.error); 