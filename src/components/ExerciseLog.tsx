import React, { useState } from 'react';
import { ExerciseEntry, Exercise } from '../types';

const CATEGORY_COLORS: Record<string, string> = {
  'Upper Body Pull': 'bg-blue-100',
  'Upper Body Push': 'bg-pink-100',
  'Lower Body': 'bg-orange-100',
  'Core/Stability': 'bg-purple-100',
  'Cardio': 'bg-green-100',
  'Full Body/Functional': 'bg-yellow-100',
};

function formatEntry(entry: ExerciseEntry) {
  if (entry.category === 'Weight & Reps') {
    return `${entry.pounds || ''}${entry.pounds ? 'x' : ''}${entry.reps || ''}`;
  }
  if (entry.category === 'Distance & Time') {
    if (entry.miles && entry.minutes) {
      return `${entry.miles}mi, ${entry.minutes}min`;
    }
    if (entry.miles) return `${entry.miles}mi`;
    if (entry.minutes) return `${entry.minutes}min`;
  }
  return '';
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[d.getMonth()];
  const day = d.getDate();
  return `${month} ${day}`;
}

function toInputDateTime(dateStr: string) {
  const d = new Date(dateStr);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

interface ExerciseLogProps {
  entries: ExerciseEntry[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (entry: Omit<ExerciseEntry, 'id' | 'date'>, id: string, date: string) => void;
  editingId?: string | null;
  exercises: Exercise[];
  onCancelEdit?: () => void;
}

const ExerciseLog: React.FC<ExerciseLogProps> = ({ entries, onEdit, onDelete, onUpdate, editingId, exercises, onCancelEdit }) => {
  const getExercise = (exerciseName: string) => exercises.find(e => e.name === exerciseName);
  const [editState, setEditState] = useState<any>({});

  // Group entries by date
  const groupedEntries = entries.reduce((groups, entry) => {
    const date = new Date(entry.date).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(entry);
    return groups;
  }, {} as Record<string, ExerciseEntry[]>);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedEntries).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  const handleEditClick = (entry: ExerciseEntry) => {
    // If sets, map to editState array
    if ('sets' in entry && Array.isArray(entry.sets)) {
      setEditState({
        sets: entry.sets.map(set => ({ ...set })),
        date: toInputDateTime(entry.date),
      });
    } else {
      setEditState({
        miles: (entry as any).miles?.toString() || '',
        minutes: (entry as any).minutes?.toString() || '',
        date: toInputDateTime(entry.date),
      });
    }
    onEdit(entry.id);
  };

  // Handle change for a set in the array
  const handleSetEditChange = (idx: number, field: string, value: string) => {
    setEditState((prev: any) => ({
      ...prev,
      sets: prev.sets.map((set: any, i: number) => i === idx ? { ...set, [field]: value } : set)
    }));
  };

  const handleEditChange = (field: string, value: string) => {
    setEditState((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleEditSave = (entry: ExerciseEntry) => {
    const ex = getExercise(entry.exercise);
    if ('sets' in entry && Array.isArray(entry.sets)) {
      // Save all sets
      const sets = editState.sets.map((set: any) => {
        const s: any = {};
        if (set.pounds !== undefined) s.pounds = parseFloat(set.pounds);
        if (set.reps !== undefined) s.reps = parseInt(set.reps, 10);
        if (set.minutes !== undefined) s.minutes = parseFloat(set.minutes);
        if (set.miles !== undefined) s.miles = parseFloat(set.miles);
        return s;
      });
      onUpdate({ exercise: entry.exercise, sets }, entry.id, new Date(editState.date).toISOString());
    } else {
      // For Run
      onUpdate({
        exercise: entry.exercise,
        miles: parseFloat(editState.miles),
        minutes: parseFloat(editState.minutes)
      }, entry.id, new Date(editState.date).toISOString());
    }
    setEditState({});
  };

  return (
    <div className="space-y-4">
      {sortedDates.map(date => (
        <div key={date} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">{formatDate(date)}</h3>
          <div className="flex flex-wrap gap-1">
            {groupedEntries[date].map(entry => {
              const ex = getExercise(entry.exercise);
              const cat = ex ? ex.category : '';
              const dataType = ex?.dataType;
              const isEditing = editingId === entry.id;
              return (
                <div
                  key={entry.id}
                  className={`relative flex flex-col px-2 py-1 rounded shadow text-[11px] font-medium border border-gray-300 ${CATEGORY_COLORS[cat] || 'bg-gray-100'} min-w-[90px] max-w-[110px] cursor-pointer hover:border-blue-400 transition-colors`}
                  onClick={() => !isEditing && handleEditClick(entry)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold break-words text-xs">{entry.exercise}</span>
                    {entry.sets && Array.isArray(entry.sets) && (
                      <span className="absolute top-1 right-2 text-[10px] font-bold text-gray-500 bg-white bg-opacity-70 rounded-full px-1">{entry.sets.length}</span>
                    )}
                  </div>
                  {!isEditing ? null : (
                    <form className="flex flex-col gap-1 mt-1" onSubmit={e => { e.preventDefault(); handleEditSave(entry); }}>
                      {/* Show all sets for editing */}
                      {('sets' in entry && Array.isArray(entry.sets)) && editState.sets && editState.sets.map((set: any, idx: number) => (
                        <div key={idx} className="flex gap-1 items-center">
                          {set.pounds !== undefined && (
                            <input
                              className="border rounded px-1 py-0.5 w-12 text-xs"
                              type="number"
                              min="0"
                              step="1"
                              placeholder="Pounds"
                              value={set.pounds}
                              onChange={e => handleSetEditChange(idx, 'pounds', e.target.value)}
                            />
                          )}
                          {set.reps !== undefined && (
                            <input
                              className="border rounded px-1 py-0.5 w-12 text-xs"
                              type="number"
                              min="0"
                              step="1"
                              placeholder="Reps"
                              value={set.reps}
                              onChange={e => handleSetEditChange(idx, 'reps', e.target.value)}
                            />
                          )}
                          {set.minutes !== undefined && (
                            <input
                              className="border rounded px-1 py-0.5 w-12 text-xs"
                              type="number"
                              min="0"
                              step="1"
                              placeholder="Minutes"
                              value={set.minutes}
                              onChange={e => handleSetEditChange(idx, 'minutes', e.target.value)}
                            />
                          )}
                          {set.miles !== undefined && (
                            <input
                              className="border rounded px-1 py-0.5 w-12 text-xs"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Miles"
                              value={set.miles}
                              onChange={e => handleSetEditChange(idx, 'miles', e.target.value)}
                            />
                          )}
                        </div>
                      ))}
                      {/* For Run or Distance & Duration */}
                      {('miles' in entry) && (
                        <input
                          className="border rounded px-1 py-0.5 w-12 text-xs"
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="Miles"
                          value={editState.miles || entry.miles}
                          onChange={e => handleEditChange('miles', e.target.value)}
                        />
                      )}
                      {('minutes' in entry) && (
                        <input
                          className="border rounded px-1 py-0.5 w-12 text-xs"
                          type="number"
                          min="0"
                          step="1"
                          placeholder="Minutes"
                          value={editState.minutes || entry.minutes}
                          onChange={e => handleEditChange('minutes', e.target.value)}
                        />
                      )}
                      <input
                        className="border rounded px-1 py-0.5 w-full text-xs"
                        type="datetime-local"
                        value={editState.date}
                        onChange={e => handleEditChange('date', e.target.value)}
                      />
                      <div className="flex gap-1 mt-1">
                        <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Save</button>
                        <button type="button" className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs" onClick={onCancelEdit}>Cancel</button>
                      </div>
                    </form>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseLog; 