import React, { useState } from 'react';

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !note.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content: note,
    };

    onAdd(newNote);
    setTitle('');
    setNote('');
  };

  // Why I chose useState + this submit handler: it allows easy form control and clear state transitions.

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
