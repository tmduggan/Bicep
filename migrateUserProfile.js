const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const userID = 'ygDZZvHG7ehSuZc2sZ4lGBwGH1y2';

async function migrateUserProfile() {
  const logs = await db.collection('workoutLogs').where('userID', '==', userID).get();
  console.log('Found logs:', logs.size);
  logs.forEach(doc => {
    console.log('Log:', doc.id, doc.data());
  });
  const lastWorkedByCategory = {};
  const lastWorkedByExercise = {};
  const oneRepMaxByExercise = {};

  logs.forEach(doc => {
    const log = doc.data();
    const { category, exercise, sets, date } = log;
    if (!category || !exercise || !date) return;

    // Last worked for category
    if (!lastWorkedByCategory[category] || new Date(date) > new Date(lastWorkedByCategory[category])) {
      lastWorkedByCategory[category] = date;
    }
    // Last worked for exercise
    if (!lastWorkedByExercise[exercise] || new Date(date) > new Date(lastWorkedByExercise[exercise])) {
      lastWorkedByExercise[exercise] = date;
    }

    // 1RM calculation for each set
    if (sets && Array.isArray(sets)) {
      sets.forEach(set => {
        if (set.pounds && set.reps) {
          const oneRM = set.pounds * (1 + set.reps / 30);
          const prev = oneRepMaxByExercise[exercise];
          if (!prev || oneRM > prev.oneRM) {
            oneRepMaxByExercise[exercise] = {
              value: set.pounds,
              reps: set.reps,
              date,
              oneRM
            };
          }
        }
        // Also support 'weight' field for legacy logs
        if (set.weight && set.reps) {
          const oneRM = set.weight * (1 + set.reps / 30);
          const prev = oneRepMaxByExercise[exercise];
          if (!prev || oneRM > prev.oneRM) {
            oneRepMaxByExercise[exercise] = {
              value: set.weight,
              reps: set.reps,
              date,
              oneRM
            };
          }
        }
      });
    }
  });

  // Remove the oneRM helper field before saving
  Object.keys(oneRepMaxByExercise).forEach(ex => {
    delete oneRepMaxByExercise[ex].oneRM;
  });

  console.log('lastWorkedByCategory:', lastWorkedByCategory);
  console.log('lastWorkedByExercise:', lastWorkedByExercise);
  console.log('oneRepMaxByExercise:', oneRepMaxByExercise);

  await db.collection('userProfiles').doc(userID).set({
    lastWorkedByCategory,
    lastWorkedByExercise,
    oneRepMaxByExercise,
  }, { merge: true });

  console.log('User profile updated from logs!');
}

migrateUserProfile().catch(console.error); 