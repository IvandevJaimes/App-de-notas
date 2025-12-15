import { Note, Tag } from '../App';

const NOTES_KEY = 'app_notes';
const TAGS_KEY = 'app_tags';

export const getNotesFromStorage = (): Note[] => {
  try {
    const stored = localStorage.getItem(NOTES_KEY);
    if (!stored) return [];
    
    const notes = JSON.parse(stored);
    // Convertir strings de fechas a objetos Date
    return notes.map((note: any) => ({
      ...note,
      createdAt: new Date(note.createdAt),
      updatedAt: new Date(note.updatedAt)
    }));
  } catch (error) {
    console.error('Error al obtener notas de localStorage:', error);
    return [];
  }
};

export const saveNotesToStorage = (notes: Note[]): void => {
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error al guardar notas en localStorage:', error);
  }
};

export const getTagsFromStorage = (): Tag[] => {
  try {
    const stored = localStorage.getItem(TAGS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error al obtener etiquetas de localStorage:', error);
    return [];
  }
};

export const saveTagsToStorage = (tags: Tag[]): void => {
  try {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
  } catch (error) {
    console.error('Error al guardar etiquetas en localStorage:', error);
  }
};

export const clearAllStorage = (): void => {
  try {
    localStorage.removeItem(NOTES_KEY);
    localStorage.removeItem(TAGS_KEY);
  } catch (error) {
    console.error('Error al limpiar localStorage:', error);
  }
};
