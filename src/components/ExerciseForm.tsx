import React, { useEffect, useState } from 'react';
import { ExerciseCategory, ExerciseEntry, Exercise, SetEntry } from '../types';

interface ExerciseFormProps {
  categories: ExerciseCategory[];
  exercises: Exercise[];
  onAdd: (entry: Omit<ExerciseEntry, 'id' | 'date'>) => void;
  onUpdate: (entry: Omit<ExerciseEntry, 'id' | 'date'>) => void;
  editingEntry?: ExerciseEntry | null;
  onCancelEdit?: () => void;
  entries?: ExerciseEntry[];
  onAddExercise?: (exercise: Exercise) => Promise<void>;
  muscleGroups?: string[];
  hideDataEntry?: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Upper Body Pull': 'bg-blue-100',
  'Upper Body Push': 'bg-pink-100',
  'Lower Body': 'bg-orange-100',
  'Core/Stability': 'bg-purple-100',
  'Cardio': 'bg-green-100',
  'Full Body/Functional': 'bg-yellow-100',
};

// Add helper to convert minutes and seconds to total seconds
function toSeconds(min: string, sec: string) {
  return (parseInt(min, 10) || 0) * 60 + (parseInt(sec, 10) || 0);
}
function fromSeconds(total: number) {
  const min = Math.floor(total / 60);
  const sec = total % 60;
  return { min, sec };
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  categories,
  exercises,
  onAdd,
  onUpdate,
  editingEntry,
  onCancelEdit,
  entries = [],
  onAddExercise,
  muscleGroups = [],
  hideDataEntry = false,
}) => {
  const [category, setCategory] = useState<ExerciseCategory>('Upper Body Push');
  const [exercise, setExercise] = useState('');
  const [customExercise, setCustomExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [addingNew, setAddingNew] = useState(false);
  const [majorMuscleGroup, setMajorMuscleGroup] = useState('');
  const [sets, setSets] = useState<any[]>([]);
  const [durationInput, setDurationInput] = useState('');

  // Find the selected exercise object
  const selectedExercise = exercises.find(ex => ex.name === exercise);

  // Reset form state on edit or when switching exercises
  useEffect(() => {
    if (editingEntry) {
      setExercise(editingEntry.exercise);
      setCustomExercise('');
      setCategory(selectedExercise?.category as ExerciseCategory || 'Upper Body Push');
      // Prefill from first set if available
      const firstSet = editingEntry.sets?.[0] || {};
      setWeight(firstSet.weight ? firstSet.weight.toString() : '');
      setReps(firstSet.reps ? firstSet.reps.toString() : '');
      setAddingNew(false);
    } else {
      setExercise('');
      setCustomExercise('');
      setWeight('');
      setReps('');
      setAddingNew(false);
    }
    setSets([]);
    setDurationInput('');
  }, [editingEntry]);

  // When an exercise button is clicked
  const handleExerciseButton = (ex: string) => {
    setExercise(ex);
    setAddingNew(false);
    const exObj = exercises.find(e => e.name === ex);
    setCategory(exObj?.category as ExerciseCategory || 'Upper Body Push');
    setWeight('');
    setReps('');
    // Prefill with most recent entry for this exercise
    const recent = entries.find(e => e.exercise === ex);
    if (recent && recent.sets && recent.sets.length > 0) {
      const firstSet = recent.sets[0];
      if (exObj?.fields.includes('distance')) setDistance(firstSet.distance?.toString() || '');
      if (exObj?.fields.includes('duration')) setDuration(firstSet.duration?.toString() || '');
      if (exObj?.fields.includes('reps')) setReps(firstSet.reps?.toString() || '');
      if (exObj?.fields.includes('weight') && exObj?.fields.includes('reps')) {
        setWeight(firstSet.weight?.toString() || '');
        setReps(firstSet.reps?.toString() || '');
      }
      if (exObj?.fields.includes('weight') && exObj?.fields.includes('duration')) {
        setWeight(firstSet.weight?.toString() || '');
        setDuration(firstSet.duration?.toString() || '');
      }
    }
  };

  // When the + button is clicked
  const handleAddNewExercise = () => {
    setExercise('');
    setCustomExercise('');
    setWeight('');
    setReps('');
    setAddingNew(true);
  };

  // When exercise changes, reset sets and duration fields
  useEffect(() => {
    setSets([]);
    setDurationInput('');
  }, [exercise, addingNew]);

  // Add set handler: adds a new empty set row
  const handleAddSet = () => {
    let set: any = {};
    selectedExercise?.fields.forEach(field => { set[field] = ''; });
    setSets(prev => [...prev, set]);
  };

  // Handle input change for a set
  const handleSetChange = (idx: number, field: string, value: string) => {
    setSets(prev => prev.map((set, i) => i === idx ? { ...set, [field]: value } : set));
  };

  // Helper to format input as m:ss
  function formatTimeInput(val: string) {
    // Remove non-digits
    const digits = val.replace(/\D/g, '');
    if (!digits) return '';
    let min = '';
    let sec = '';
    if (digits.length <= 2) {
      min = '0';
      sec = digits.padStart(2, '0');
    } else {
      min = digits.slice(0, -2);
      sec = digits.slice(-2);
    }
    return `${parseInt(min, 10)}:${sec}`;
  }

  // Helper to convert m:ss to total seconds
  function parseTimeInput(val: string) {
    const [min, sec] = val.split(':');
    return (parseInt(min, 10) || 0) * 60 + (parseInt(sec, 10) || 0);
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const exerciseName = addingNew ? customExercise : exercise;
    if (!exerciseName) return;
    let entry: any = { exercise: exerciseName };
    if (selectedExercise?.fields.includes('distance') || exerciseName === 'Run') {
      // Special case for Run
      if (!distance && !duration) return;
      entry.sets = [{ distance: distance ? parseFloat(distance) : 0, duration: duration ? parseFloat(duration) : 0 }];
    } else if (selectedExercise?.fields.includes('duration')) {
      const totalSec = parseTimeInput(durationInput);
      if (!totalSec) return;
      entry.sets = [{ seconds: totalSec }];
    } else if (sets.length > 0) {
      // Validate all sets
      for (const set of sets) {
        for (const field of selectedExercise?.fields || []) {
          if (field === 'reps' && !set[field]) return;
          if (field === 'weight' && (!set[field] || !set.reps)) return;
          if (field === 'duration' && (!set[field] || !set.distance)) return;
        }
      }
      entry.sets = sets.map(set => {
        const s: any = {};
        for (const field of selectedExercise?.fields || []) {
          if (set[field]) s[field] = parseFloat(set[field]);
        }
        return s;
      });
    } else {
      // Single set
      const s: any = {};
      for (const field of selectedExercise?.fields || []) {
        if (field === 'reps' && !reps) return;
        if (field === 'weight' && !weight) return;
        if (field === 'weight' && !reps) return;
        if (field === 'duration' && !duration) return;
        s[field] = field === 'reps' ? parseInt(reps, 10) : field === 'weight' ? parseFloat(weight) : field === 'duration' ? parseFloat(duration) : null;
      }
      entry.sets = [s];
    }
    if (addingNew && onAddExercise) {
      await onAddExercise({
        name: exerciseName,
        category: selectedExercise?.category || 'Upper Body Push',
        fields: selectedExercise?.fields || [],
        primaryMuscles: [],
        secondaryMuscles: [],
        majorMuscleGroup,
        iconUrl: '',
      });
    }
    if (editingEntry) {
      onUpdate(entry);
    } else {
      onAdd(entry);
    }
    // Reset form after submit
    setExercise('');
    setCustomExercise('');
    setWeight('');
    setReps('');
    setAddingNew(false);
    setSets([]);
  };

  // Determine which fields to show
  const fieldsToShow = addingNew
    ? [] // For adding new, you may want to add a local fields state if supporting new exercise creation
    : selectedExercise?.fields || [];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      {/* Exercise selection buttons - CSS grid with fixed-size buttons */}
      <div className="grid grid-cols-4 gap-2 mb-2 justify-center">
        {exercises.map(ex => (
          <button
            type="button"
            key={ex.name}
            className={`flex flex-col items-center justify-center min-w-[90px] max-w-[90px] h-[40px] px-1 py-1 rounded shadow text-[11px] font-medium border border-gray-300 transition leading-tight break-words overflow-hidden ${exercise === ex.name && !addingNew ? 'ring-2 ring-blue-400' : ''} ${CATEGORY_COLORS[ex.category] || 'bg-gray-100'} hover:bg-blue-100`}
            onClick={() => handleExerciseButton(ex.name)}
            disabled={!!editingEntry}
          >
            {ex.iconUrl && (
              <div className="w-5 h-5 flex items-center justify-center mb-0.5">
                <img src={ex.iconUrl} alt={ex.name} className="w-5 h-5 object-cover rounded" />
              </div>
            )}
            <span className="text-center w-full">{ex.name}</span>
          </button>
        ))}
        <button
          type="button"
          className={`flex flex-col items-center justify-center px-1 py-1 rounded shadow text-xs font-bold border border-gray-300 bg-gray-100 hover:bg-green-100 transition min-w-[90px] max-w-[90px] h-[40px]`}
          onClick={handleAddNewExercise}
          disabled={!!editingEntry}
          title="Add new exercise"
        >
          +
        </button>
      </div>
      {/* Data entry fields (inputs, 1RM, etc.) are hidden if hideDataEntry is true */}
      {hideDataEntry ? null : (
        <>
          {/* New exercise input - compact layout */}
          {addingNew && !editingEntry && (
            <>
              <div className="flex gap-2 mb-2">
                <input
                  className="border rounded px-2 py-1 flex-1"
                  placeholder="New exercise name"
                  value={customExercise}
                  onChange={e => setCustomExercise(e.target.value)}
                />
                {fieldsToShow.includes('distance') && (
                  <input
                    className="border rounded px-2 py-1 w-28"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Distance (miles)"
                    value={distance}
                    onChange={e => setDistance(e.target.value)}
                  />
                )}
                {fieldsToShow.includes('duration') && (
                  <input
                    className="border rounded px-2 py-1 w-28"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Duration (sec)"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                  />
                )}
                {fieldsToShow.includes('weight') && (
                  <input
                    className="border rounded px-2 py-1 w-28"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                  />
                )}
                {fieldsToShow.includes('reps') && (
                  <input
                    className="border rounded px-2 py-1 w-28"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Reps"
                    value={reps}
                    onChange={e => setReps(e.target.value)}
                  />
                )}
              </div>
              <div className="flex gap-2">
                <select
                  className="border rounded px-2 py-1"
                  value={selectedExercise?.fields.includes('distance') ? 'Distance' : selectedExercise?.fields.includes('duration') ? 'Duration' : 'Reps'}
                  onChange={e => {
                    // Handle dataType change
                  }}
                >
                  {selectedExercise?.fields.map(field => (
                    <option key={field} value={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</option>
                  ))}
                </select>
                <select
                  className="border rounded px-2 py-1"
                  value={majorMuscleGroup}
                  onChange={e => setMajorMuscleGroup(e.target.value)}
                >
                  <option value="">Select Muscle Group</option>
                  {muscleGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </>
          )}
          {/* Show input fields only if exercise is selected or adding new */}
          {!addingNew && !!selectedExercise && (
            <>
              {/* Multiple set rows */}
              <div className="flex flex-col gap-2 mb-2">
                {sets.length === 0 && (
                  <div className="flex gap-2 items-end">
                    {fieldsToShow.includes('distance') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Distance (miles)"
                        value={distance}
                        onChange={e => setDistance(e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('duration') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Duration (sec)"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('weight') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('reps') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Reps"
                        value={reps}
                        onChange={e => setReps(e.target.value)}
                      />
                    )}
                    {/* When sets.length === 0, show the add set button for all except Run */}
                    {!(fieldsToShow.includes('distance') && fieldsToShow.includes('duration')) && (
                      <button
                        type="button"
                        className="ml-1 w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300"
                        onClick={handleAddSet}
                        title="Add Set"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
                {sets.map((set, idx) => (
                  <div key={idx} className="flex gap-2 items-end">
                    {fieldsToShow.includes('distance') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Distance (miles)"
                        value={set.distance}
                        onChange={e => handleSetChange(idx, 'distance', e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('duration') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Duration (sec)"
                        value={set.duration}
                        onChange={e => handleSetChange(idx, 'duration', e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('weight') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Weight"
                        value={set.weight}
                        onChange={e => handleSetChange(idx, 'weight', e.target.value)}
                      />
                    )}
                    {fieldsToShow.includes('reps') && (
                      <input
                        className="border rounded px-2 py-1 w-20"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Reps"
                        value={set.reps}
                        onChange={e => handleSetChange(idx, 'reps', e.target.value)}
                      />
                    )}
                    {/* When sets.length === 0, show the add set button for all except Run */}
                    {!(fieldsToShow.includes('distance') && fieldsToShow.includes('duration')) && (
                      <button
                        type="button"
                        className="ml-1 w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300"
                        onClick={handleAddSet}
                        title="Add Set"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              {fieldsToShow.includes('duration') && selectedExercise?.fields.includes('duration') && (
                <div className="flex items-end gap-2 mb-2">
                  <input
                    className="border rounded px-2 py-1 w-20 text-center"
                    type="text"
                    placeholder="0:00"
                    value={formatTimeInput(durationInput)}
                    onChange={e => setDurationInput(e.target.value)}
                    maxLength={5}
                  />
                  <button
                    type="button"
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-green-200 hover:bg-green-300 text-green-800 border border-green-300"
                    onClick={handleAddSet}
                    title="Add Set"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              )}
              {/* 1RM display for Weight & Reps exercises */}
              {!addingNew && selectedExercise?.fields.includes('weight') && (() => {
                // Find all entries for this exercise in the last 2 months
                const now = new Date();
                const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, now.getDate());
                const relevantEntries = entries.filter(e =>
                  e.exercise === selectedExercise.name &&
                  e.sets && Array.isArray(e.sets) &&
                  new Date(e.date) >= twoMonthsAgo
                );
                // Find best 1RM
                let best1RM = 0;
                let bestSet: SetEntry | null = null;
                let bestDate = null;
                relevantEntries.forEach(e => {
                  e.sets.forEach(set => {
                    if (set.weight && set.reps) {
                      const oneRM = set.weight * (1 + set.reps / 30);
                      if (oneRM > best1RM) {
                        best1RM = oneRM;
                        bestSet = set;
                        bestDate = e.date;
                      }
                    }
                  });
                });
                if (best1RM > 0 && bestSet && bestDate) {
                  // Relative date
                  const d = new Date(bestDate);
                  const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
                  let rel = '';
                  if (diffDays === 0) rel = 'Today';
                  else if (diffDays === 1) rel = '1 day ago';
                  else if (diffDays < 7) rel = `${diffDays} days ago`;
                  else if (diffDays < 14) rel = '1 week ago';
                  else if (diffDays < 30) rel = `${Math.floor(diffDays / 7)} weeks ago`;
                  else if (diffDays < 60) rel = '1 month ago';
                  else rel = `${Math.floor(diffDays / 30)} months ago`;
                  return (
                    <div className="mb-2 text-[13px] text-gray-700 text-center">
                      <div><b>1RM:</b> {Math.round(best1RM)} lbs</div>
                      <div className="text-gray-500 text-xs">({(bestSet as SetEntry).weight} x {(bestSet as SetEntry).reps}) {rel}</div>
                    </div>
                  );
                }
                return null;
              })()}
            </>
          )}
        </>
      )}
      <div className="flex justify-end gap-2">
        {editingEntry ? (
          <>
            <button
              type="button"
              className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center"
              disabled={(!addingNew && !selectedExercise) || (addingNew && (!customExercise || !majorMuscleGroup))}
              title="Save"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v-1.5A2.25 2.25 0 0 0 15 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.25a1.5 1.5 0 0 0-1.5-1.5h-6.75a.75.75 0 0 1-.75-.75V4.5" />
              </svg>
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center"
            disabled={(!addingNew && !selectedExercise) || (addingNew && (!customExercise || !majorMuscleGroup))}
            title="Save"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v-1.5A2.25 2.25 0 0 0 15 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.25a1.5 1.5 0 0 0-1.5-1.5h-6.75a.75.75 0 0 1-.75-.75V4.5" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};

export default ExerciseForm; 