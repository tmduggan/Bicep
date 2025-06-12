import React, { useEffect, useState } from 'react';
import ExerciseForm from './components/ExerciseForm';
import ExerciseLog from './components/ExerciseLog';
import { ExerciseCategory, ExerciseEntry, Exercise } from './types';
import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, Timestamp } from 'firebase/firestore';

const CATEGORIES: ExerciseCategory[] = [
  'Upper Body Push',
  'Upper Body Pull',
  'Lower Body',
  'Core/Stability',
  'Cardio',
  'Full Body/Functional',
];

const CATEGORY_COLORS: Record<string, string> = {
  'Upper Body Pull': 'bg-blue-100',
  'Upper Body Push': 'bg-pink-100',
  'Lower Body': 'bg-orange-100',
  'Core/Stability': 'bg-purple-100',
  'Cardio': 'bg-green-100',
  'Full Body/Functional': 'bg-yellow-100',
};

const App: React.FC = () => {
  const [entries, setEntries] = useState<(ExerciseEntry & { id: string })[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loadingExercises, setLoadingExercises] = useState(true);
  const [loadingLogs, setLoadingLogs] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Fetch exercises from Firestore
  const fetchExercises = async () => {
    setLoadingExercises(true);
    const snapshot = await getDocs(collection(db, 'workoutLibrary'));
    const exs: Exercise[] = snapshot.docs.map(doc => doc.data() as Exercise);
    setExercises(exs);
    setLoadingExercises(false);
  };
  useEffect(() => {
    fetchExercises();
  }, []);

  // Fetch workout logs from Firestore
  useEffect(() => {
    async function fetchLogs() {
      setLoadingLogs(true);
      const snapshot = await getDocs(collection(db, 'workoutLogs'));
      const logs = snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id })) as (ExerciseEntry & { id: string })[];
      // Sort by date descending
      logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setEntries(logs);
      setLoadingLogs(false);
    }
    fetchLogs();
  }, []);

  // Fetch muscle groups from Firestore
  const fetchMuscleGroups = async () => {
    const snapshot = await getDocs(collection(db, 'muscleGroups'));
    const groups: string[] = snapshot.docs.map(doc => doc.data().name);
    setMuscleGroups(groups);
  };
  useEffect(() => {
    fetchMuscleGroups();
  }, []);

  const handleAdd = async (entry: Omit<ExerciseEntry, 'id' | 'date'>) => {
    const date = new Date().toISOString();
    const docRef = await addDoc(collection(db, 'workoutLogs'), { ...entry, date });
    setEntries(prev => [{ ...entry, date, id: docRef.id }, ...prev]);
  };

  const handleUpdate = async (entry: Omit<ExerciseEntry, 'id' | 'date'>, idOverride?: string, dateOverride?: string) => {
    const id = idOverride || editingId;
    if (!id) return;
    const logRef = doc(db, 'workoutLogs', id);
    const date = dateOverride || new Date().toISOString();
    await updateDoc(logRef, { ...entry, date });
    setEntries(prev => prev.map(e => e.id === id ? { ...e, ...entry, date } : e));
    setEditingId(null);
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'workoutLogs', id));
    setEntries(prev => prev.filter(e => e.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const editingEntry = editingId ? entries.find(e => e.id === editingId) : null;

  // Add a new exercise to Firestore
  const handleAddExercise = async (exercise: Exercise) => {
    await addDoc(collection(db, 'workoutLibrary'), exercise);
    await fetchExercises();
  };

  // Sort exercises by category order
  const sortedExercises = [...exercises].sort((a, b) => {
    const aIdx = CATEGORIES.indexOf(a.category as ExerciseCategory);
    const bIdx = CATEGORIES.indexOf(b.category as ExerciseCategory);
    if (aIdx !== bIdx) return aIdx - bIdx;
    return a.name.localeCompare(b.name);
  });
  const filteredExercises = categoryFilter
    ? sortedExercises.filter(e => e.category === categoryFilter)
    : sortedExercises;

  // Only pass editingEntry to ExerciseForm if adding or editing a new exercise, not when editing a log entry
  const showForm = !editingId;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">💪 BICEP 💪</h1>
        {/* Category filter buttons for exercise selection */}
        <div className="grid grid-cols-3 grid-rows-2 gap-0 mb-4 w-full max-w-xs mx-auto rounded overflow-hidden">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`flex items-center justify-center px-2 py-2 text-xs font-medium transition min-h-[40px] min-w-[90px] max-w-[120px] w-full h-full text-center break-words ${categoryFilter === cat ? CATEGORY_COLORS[cat] : 'bg-gray-100'}`}
              style={{ border: 'none', borderRadius: 0 }}
              onClick={() => setCategoryFilter(categoryFilter === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {loadingExercises ? (
          <div className="text-center text-gray-400 mb-4">Loading exercises...</div>
        ) : (
          <>
            <ExerciseForm
              categories={CATEGORIES}
              exercises={filteredExercises}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              editingEntry={null}
              onCancelEdit={handleCancelEdit}
              entries={entries}
              onAddExercise={handleAddExercise}
              muscleGroups={muscleGroups}
              hideDataEntry={!!editingId}
            />
          </>
        )}
        {loadingLogs ? (
          <div className="text-center text-gray-400 mb-4">Loading logs...</div>
        ) : (
          <ExerciseLog
            entries={entries}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            editingId={editingId}
            onCancelEdit={handleCancelEdit}
            exercises={exercises}
          />
        )}
      </div>
    </div>
  );
};

export default App; 