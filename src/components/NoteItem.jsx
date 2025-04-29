import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg">{note.title}</h3>
        <p className="text-gray-600 mt-1">{note.content}</p>
      </div>
      <button
        onClick={() => onDelete(note.id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
