import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  // Why useEffect to sync storage → state: Ensures we always show fresh notes from localStorage

  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet.</p>
      ) : (
        notes.map((note) => (
         <NoteItem note={note} onDelete={onDelete}/>
        ))
      )}
    </div>
  );
};

export default NoteList;
