import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import {getNotes, saveNotes} from './services/storageServices'

const App = () => {
  const [notes, setNotes] = useState(() => getNotes()); // load notes from localStorage
  const [view, setView] = useState('add');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    try {
      setSaving(true);
      saveNotes(notes);
      setError('');
    } catch (err) {
      setError('❌ Could not save notes. Storage full or blocked.');
    } finally {
      setSaving(false);
    }
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">📝 Custom Note Service</h1>

        {/* Navigation */}
        <nav className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded ${view === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('add')}
          >
            Add Note
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('list')}
          >
            View Notes
          </button>
        </nav>
        {/* // Why this nav approach for simplicity: state toggle keeps UI clean and easy to manage */}

        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
        {saving && <div className="text-blue-600 text-sm mb-4">Saving...</div>}
        {/* // Why show spinner here: UX feedback during save */}

        {view === 'add' ? <NoteForm onAdd={handleAddNote} /> : <NoteList notes={notes} onDelete={handleDeleteNote} />}
      </div>
    </div>
  );
};

export default App;
