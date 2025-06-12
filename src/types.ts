export type ExerciseCategory =
  | 'Upper Body Push'
  | 'Upper Body Pull'
  | 'Lower Body'
  | 'Core/Stability'
  | 'Cardio'
  | 'Full Body/Functional';

export type ExerciseField = 'weight' | 'reps' | 'duration' | 'distance';

export interface Exercise {
  name: string;
  category: ExerciseCategory;
  fields: ExerciseField[];
  primaryMuscles: string[];
  secondaryMuscles: string[];
  majorMuscleGroup?: string;
  iconUrl?: string;  // URL to the exercise icon in Firebase Storage
}

export type SetEntry = Partial<Record<ExerciseField, number>>;

export interface ExerciseEntry {
  id: string;
  exercise: string;
  sets: SetEntry[];
  date: string;
} 