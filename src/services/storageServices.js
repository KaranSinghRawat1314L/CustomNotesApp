const STORAGE_KEY = 'notes';

export const getNotes = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Corrupted or inaccessible localStorage:', e);
    return [];
  }
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    throw new Error('Storage error: quota exceeded or blocked.');
  }
};
