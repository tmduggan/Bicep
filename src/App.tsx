import React, { useEffect, useState } from 'react';
import ExerciseForm from './components/ExerciseForm';
import { ExerciseCategory, ExerciseEntry, Exercise } from './types';
import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, Timestamp, query, where, setDoc } from 'firebase/firestore';
import { auth, googleProvider, getUserProfile, upsertUserProfile, updateUserProfileStats } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { FaSave, FaTimes } from 'react-icons/fa';

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

const MENU_OPTIONS = ['Log Workout', 'Workout Logs', 'Workout Library'];

// Helper to update user profile stats after a log is added/updated
async function updateProfileStatsForLog(entry: any, userID: string) {
  if (!userID) return;
  const profile = (await getUserProfile(userID)) || {};
  // Update last worked for exercise
  const lastWorkedByExercise = { ...(profile.lastWorkedByExercise || {}) };
  lastWorkedByExercise[entry.exercise] = entry.date;

  // Update last worked for category: find the most recent date among all exercises in this category
  const lastWorkedByCategory = { ...(profile.lastWorkedByCategory || {}) };
  // Get all exercises in this category
  const allLogsSnap = await getDocs(query(collection(db, 'workoutLogs'), where('userID', '==', userID), where('category', '==', entry.category)));
  let mostRecent = entry.date;
  allLogsSnap.forEach(doc => {
    const log = doc.data();
    if (log.date && new Date(log.date) > new Date(mostRecent)) {
      mostRecent = log.date;
    }
  });
  lastWorkedByCategory[entry.category] = mostRecent;

  // Update 1RM if applicable
  let oneRepMaxByExercise: Record<string, { value: number, reps: number, date: string, oneRM?: number }> = { ...(profile.oneRepMaxByExercise || {}) };
  if (entry.sets && entry.sets.length > 0) {
    let maxWeight = 0;
    let maxReps = 0;
    entry.sets.forEach((set: any) => {
      if (set.weight && set.reps && set.weight > maxWeight) {
        maxWeight = set.weight;
        maxReps = set.reps;
      }
    });
    if (maxWeight > 0) {
      const prev = oneRepMaxByExercise[entry.exercise];
      if (!prev || maxWeight > prev.value) {
        oneRepMaxByExercise[entry.exercise] = { value: maxWeight, reps: maxReps, date: entry.date };
      }
    }
  }
  await upsertUserProfile(userID, {
    lastWorkedByCategory,
    lastWorkedByExercise,
    oneRepMaxByExercise,
  });
}

// Helper to get days since last logged for an exercise
function getDaysSinceLastLogged(profile: any, exercise: string) {
  if (!profile || !profile.lastWorkedByExercise || !profile.lastWorkedByExercise[exercise]) return null;
  const last = new Date(profile.lastWorkedByExercise[exercise]);
  return Math.floor((Date.now() - last.getTime()) / (1000 * 60 * 60 * 24));
}

// Add a function to update user profile from logs on login
async function updateUserProfileFromLogs(userID: string) {
  const logsSnap = await getDocs(query(collection(db, 'workoutLogs'), where('userID', '==', userID)));
  const lastWorkedByExercise: Record<string, string> = {};
  const oneRepMaxByExercise: Record<string, { value: number, reps: number, date: string, oneRM?: number }> = {};
  logsSnap.forEach(doc => {
    const log = doc.data();
    const { exercise, sets, date } = log;
    if (!exercise || !date) return;
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
          if (!prev || oneRM > (prev?.oneRM ?? -Infinity)) {
            oneRepMaxByExercise[exercise] = {
              value: set.pounds,
              reps: set.reps,
              date,
              oneRM
            };
          }
        }
        if (set.weight && set.reps) {
          const oneRM = set.weight * (1 + set.reps / 30);
          const prev = oneRepMaxByExercise[exercise];
          if (!prev || oneRM > (prev?.oneRM ?? -Infinity)) {
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
  await upsertUserProfile(userID, {
    lastWorkedByExercise,
    oneRepMaxByExercise,
  });
}

const App: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loadingExercises, setLoadingExercises] = useState(true);
  const [muscleGroups, setMuscleGroups] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [menu, setMenu] = useState('Log Workout');
  const [logs, setLogs] = useState<any[]>([]);
  const [libraryEdit, setLibraryEdit] = useState<{ [name: string]: any }>({});
  const [logsEdit, setLogsEdit] = useState<{ [id: string]: any }>({});

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

  // Fetch muscle groups from Firestore
  const fetchMuscleGroups = async () => {
    const snapshot = await getDocs(collection(db, 'muscleGroups'));
    const groups: string[] = snapshot.docs.map(doc => doc.data().name);
    setMuscleGroups(groups);
  };
  useEffect(() => {
    fetchMuscleGroups();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      const p = await getUserProfile(user.uid);
      setProfile(p);
    }
    fetchProfile();
  }, [user]);

  // When user logs in, update their profile from logs
  useEffect(() => {
    if (!user) return;
    updateUserProfileFromLogs(user.uid);
  }, [user]);

  // Fetch logs for Workout Logs view
  useEffect(() => {
    if (menu !== 'Workout Logs' || !user || !user.uid) return;
    async function fetchLogs() {
      const q = query(collection(db, 'workoutLogs'), where('userID', '==', user.uid));
      const snap = await getDocs(q);
      setLogs(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchLogs();
  }, [menu, user]);

  const handleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setProfileMenuOpen(false);
  };

  const handleAdd = async (entry: Omit<ExerciseEntry, 'id' | 'date'>) => {
    const date = new Date().toISOString();
    const exerciseObj = exercises.find(e => e.name === entry.exercise);
    const category = exerciseObj ? exerciseObj.category : 'Unknown';
    const logWithUser = { ...entry, date, userID: user?.uid, category };
    await setDoc(doc(db, 'workoutLogs', date), logWithUser);
    if (user?.uid) await updateProfileStatsForLog(logWithUser, user.uid);
  };

  const handleUpdate = async (entry: Omit<ExerciseEntry, 'id' | 'date'>, idOverride?: string, dateOverride?: string) => {
    const id = idOverride || editingId;
    if (!id) return;
    const logRef = doc(db, 'workoutLogs', id);
    const date = dateOverride || new Date().toISOString();
    const logWithUser = { ...entry, date, userID: user?.uid };
    await updateDoc(logRef, logWithUser);
    if (user?.uid) await updateProfileStatsForLog(logWithUser, user.uid);
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

  // --- Workout Logs Table ---
  function renderLogsTable() {
    if (!logs.length) return <div className="text-center text-gray-400">No logs found.</div>;
    return (
      <table className="w-full text-xs border border-gray-200 rounded bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Date</th>
            <th className="p-2">Exercise</th>
            <th className="p-2">Category</th>
            <th className="p-2">Sets</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => {
            const logId = log.id;
            const isEditing = !!logsEdit[logId];
            const edit = logsEdit[logId] || {};
            // Format date for input type="date"
            const dateValue = edit.date !== undefined ? edit.date : (log.date ? new Date(log.date).toISOString().slice(0,10) : '');
            // Compute new doc ID format
            const newDocId = `${edit.date || (log.date ? new Date(log.date).toISOString() : '')}_${(log.exercise || '').replace(/[^a-zA-Z0-9]/g, '')}_${log.userID}`;
            // Detect if this is an old-format log (has 'id' field or docId doesn't match new format)
            const needsMigration = Boolean(log.id && log.id.length < 30) || log.id !== newDocId || log.hasOwnProperty('id');
            return (
              <tr key={logId} className={isEditing ? 'bg-yellow-50' : ''}>
                <td className="p-2">
                  {isEditing ? (
                    <input type="date" className="border rounded px-1 py-0.5" value={dateValue} onChange={e => setLogsEdit(prev => ({ ...prev, [logId]: { ...edit, date: e.target.value } }))} />
                  ) : (
                    log.date ? new Date(log.date).toLocaleDateString() : ''
                  )}
                </td>
                <td className="p-2">{log.exercise}</td>
                <td className="p-2">
                  {isEditing ? (
                    <select className="border rounded px-1 py-0.5" value={edit.category || log.category} onChange={e => setLogsEdit(prev => ({ ...prev, [logId]: { ...edit, category: e.target.value } }))}>
                      {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  ) : (
                    log.category
                  )}
                </td>
                <td className="p-2">
                  {isEditing ? (
                    (log.sets || []).map((set: any, i: number) => (
                      <div key={i} className="flex gap-1 mb-1">
                        {Object.keys(set).map(field => (
                          <input key={field} type="number" className="border rounded px-1 py-0.5 w-14" value={edit.sets?.[i]?.[field] ?? set[field] ?? ''} onChange={e => {
                            const newSets = (edit.sets ? [...edit.sets] : JSON.parse(JSON.stringify(log.sets)));
                            newSets[i][field] = e.target.value;
                            setLogsEdit(prev => ({ ...prev, [logId]: { ...edit, sets: newSets } }));
                          }} placeholder={field} />
                        ))}
                      </div>
                    ))
                  ) : (
                    (log.sets || []).map((set: any, i: number) => (
                      <div key={i}>{Object.entries(set).map(([k, v]) => `${k}: ${v}`).join(', ')}</div>
                    ))
                  )}
                </td>
                <td className="p-2 flex gap-2 items-center">
                  {isEditing ? (
                    <>
                      <button className="text-green-600" onClick={async () => {
                        // Save or migrate
                        const updated = { ...log, ...edit };
                        delete updated.id; // Remove any internal id field
                        if (needsMigration) {
                          // Create new doc with newDocId, delete old
                          await setDoc(doc(db, 'workoutLogs', newDocId), updated);
                          await deleteDoc(doc(db, 'workoutLogs', logId));
                          setLogsEdit(prev => { const cp = { ...prev }; delete cp[logId]; return cp; });
                          setLogs(logs => logs.filter(l => l.id !== logId).concat([{ ...updated, id: newDocId }]));
                        } else {
                          await updateDoc(doc(db, 'workoutLogs', logId), updated);
                          setLogsEdit(prev => { const cp = { ...prev }; delete cp[logId]; return cp; });
                          setLogs(logs => logs.map(l => l.id === logId ? { ...l, ...edit } : l));
                        }
                      }}><FaSave /></button>
                      <button className="text-red-600" onClick={() => setLogsEdit(prev => { const cp = { ...prev }; delete cp[logId]; return cp; })}><FaTimes /></button>
                    </>
                  ) : (
                    <button className="text-blue-600 underline" onClick={() => setLogsEdit(prev => ({ ...prev, [logId]: {} }))}>Edit</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  // --- Workout Library Table ---
  function renderLibraryTable() {
    if (!exercises.length) return <div className="text-center text-gray-400">No exercises found.</div>;
    return (
      <table className="w-full text-xs border border-gray-200 rounded bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Exercise</th>
            <th className="p-2">Category</th>
            <th className="p-2">Fields</th>
            <th className="p-2">Primary Muscle</th>
            <th className="p-2">Secondary Muscle</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(ex => {
            // Always editable: use local state for edits
            const docId = (ex as any).id || ex.name;
            const edit = libraryEdit[docId] || {
              id: (ex as any).id || ex.name,
              name: ex.name,
              category: ex.category,
              fields: ex.fields,
              primaryMuscles: ex.primaryMuscles,
              secondaryMuscles: ex.secondaryMuscles,
            };
            // Detect if row is dirty (changed)
            const isDirty = JSON.stringify(edit) !== JSON.stringify({
              id: (ex as any).id || ex.name,
              name: ex.name,
              category: ex.category,
              fields: ex.fields,
              primaryMuscles: ex.primaryMuscles,
              secondaryMuscles: ex.secondaryMuscles,
            });
            return (
              <tr key={docId} className={isDirty ? 'bg-yellow-50' : ''}>
                <td className="p-2">
                  <input className="border rounded px-1 py-0.5 w-32" value={edit.id} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, id: e.target.value } }))} />
                </td>
                <td className="p-2">
                  <input className="border rounded px-1 py-0.5 w-32" value={edit.name} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, name: e.target.value } }))} />
                </td>
                <td className="p-2">
                  <select className="border rounded px-1 py-0.5" value={edit.category} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, category: e.target.value } }))}>
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </td>
                <td className="p-2 flex gap-1">
                  <select className="border rounded px-1 py-0.5" value={edit.fields?.[0] || ''} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, fields: [e.target.value, edit.fields?.[1] || ''] } }))}>
                    <option value="">(none)</option>
                    <option value="weight">weight</option>
                    <option value="reps">reps</option>
                    <option value="distance">distance</option>
                    <option value="duration">duration</option>
                  </select>
                  <select className="border rounded px-1 py-0.5" value={edit.fields?.[1] || ''} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, fields: [edit.fields?.[0] || '', e.target.value] } }))}>
                    <option value="">(none)</option>
                    <option value="weight">weight</option>
                    <option value="reps">reps</option>
                    <option value="distance">distance</option>
                    <option value="duration">duration</option>
                  </select>
                </td>
                <td className="p-2">
                  <select className="border rounded px-1 py-0.5" value={edit.primaryMuscles?.[0] || ''} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, primaryMuscles: [e.target.value] } }))}>
                    <option value="">(none)</option>
                    {muscleGroups.map(mg => <option key={mg} value={mg}>{mg}</option>)}
                  </select>
                </td>
                <td className="p-2">
                  <select className="border rounded px-1 py-0.5" value={edit.secondaryMuscles?.[0] || ''} onChange={e => setLibraryEdit(prev => ({ ...prev, [docId]: { ...edit, secondaryMuscles: [e.target.value] } }))}>
                    <option value="">(none)</option>
                    {muscleGroups.map(mg => <option key={mg} value={mg}>{mg}</option>)}
                  </select>
                </td>
                <td className="p-2 flex gap-2 items-center">
                  {isDirty && (
                    <>
                      <button className="text-green-600" onClick={async () => {
                        // If ID changed, create new doc and delete old
                        if (edit.id !== docId) {
                          await setDoc(doc(db, 'workoutLibrary', edit.id), { ...edit });
                          await deleteDoc(doc(db, 'workoutLibrary', docId));
                        } else {
                          await updateDoc(doc(db, 'workoutLibrary', docId), { ...edit });
                        }
                        setLibraryEdit(prev => { const cp = { ...prev }; delete cp[docId]; return cp; });
                        fetchExercises();
                      }}><FaSave /></button>
                      <button className="text-red-600" onClick={() => setLibraryEdit(prev => { const cp = { ...prev }; delete cp[docId]; return cp; })}><FaTimes /></button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 relative">
        {/* Restore user profile/login UI at top right */}
        <div className="absolute top-4 right-4 z-10">
          {!user ? null : (
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen((open) => !open)}
                className="flex items-center gap-2 focus:outline-none"
                title={user.displayName || user.email || 'Profile'}
              >
                <img
                  src={user.photoURL || ''}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-300 shadow"
                />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-20">
                  <div className="px-4 py-2 text-gray-700 font-semibold border-b border-gray-100">
                    {user.displayName || user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Only show Log Workout view, remove top menu and admin views */}
        <h1 className="text-2xl font-bold mb-4 text-center">💪 BICEP 💪</h1>
        {/* Category filter buttons for exercise selection */}
        <div className="grid grid-cols-3 grid-rows-2 gap-0 mb-4 w-full max-w-xs mx-auto rounded overflow-hidden">
          {CATEGORIES.map(cat => {
            let days: number | null = null;
            if (profile && profile.lastWorkedByCategory && profile.lastWorkedByCategory[cat]) {
              const last = new Date(profile.lastWorkedByCategory[cat]);
              days = Math.floor((Date.now() - last.getTime()) / (1000 * 60 * 60 * 24));
            }
            let color = '';
            if (days === null) color = 'bg-gray-300';
            else if (days <= 3) color = 'bg-green-400';
            else if (days <= 5) color = 'bg-yellow-400';
            else color = 'bg-red-400';
            return (
              <button
                key={cat}
                className={`relative flex items-center justify-center px-2 py-2 text-xs font-medium transition min-h-[40px] min-w-[90px] max-w-[120px] w-full h-full text-center break-words ${categoryFilter === cat ? CATEGORY_COLORS[cat] : 'bg-gray-100'}`}
                style={{ border: 'none', borderRadius: 0 }}
                onClick={() => setCategoryFilter(categoryFilter === cat ? null : cat)}
              >
                {cat}
                <span className={`absolute top-0 right-0 mt-1 mr-2 w-2.5 h-2.5 rounded-full ${color}`}></span>
              </button>
            );
          })}
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
              muscleGroups={muscleGroups}
              user={user}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App; 