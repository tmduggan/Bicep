const fs = require('fs');

// Load exported exercises
const exercises = JSON.parse(fs.readFileSync('exercises_export.json', 'utf8'));

// Map old dataType to new fields array
const dataTypeToFields = {
  'Weight & Reps': ['weight', 'reps'],
  'Weight & Duration': ['weight', 'duration'],
  'Reps': ['reps'],
  'Duration': ['duration'],
  'Distance': ['distance'],
  'Distance & Duration': ['distance', 'duration'],
  // Add any other mappings as needed
};

const migrated = exercises.map(ex => {
  const fields = dataTypeToFields[ex.dataType] || [];
  const { dataType, best1RM, best1RMDate, bestMile, bestMileDate, bestDuration, bestDurationDate, ...rest } = ex;
  return {
    ...rest,
    fields,
    best: {},
    lastLoggedDate: null
  };
});

fs.writeFileSync('workoutLibrary_migrated.json', JSON.stringify(migrated, null, 2));
console.log('Migrated', migrated.length, 'exercises to workoutLibrary_migrated.json'); 