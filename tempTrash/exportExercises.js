const admin = require('firebase-admin');
const fs = require('fs');

// Path to your service account key JSON file
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function exportExercises() {
  const snapshot = await db.collection('exercises').get();
  const exercises = [];
  snapshot.forEach(doc => {
    exercises.push({ id: doc.id, ...doc.data() });
  });
  fs.writeFileSync('exercises_export.json', JSON.stringify(exercises, null, 2));
  console.log('Exported', exercises.length, 'exercises to exercises_export.json');
}

exportExercises(); 