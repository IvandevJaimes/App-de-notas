import { useContext, useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { NewNote } from './pages/NewNote';
import { Note as NotePage } from './pages/Note';
import { EditNote } from './pages/EditNote';
import { NotFound } from './pages/NotFound';
import { testTags } from './testNotes';
import { NotesContext } from './context/NotesContext';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import { getNotesFromStorage, saveNotesToStorage, getTagsFromStorage, saveTagsToStorage } from './utils/storageApi';
import { Loader } from './components/Loader';

export type Tag = {
  id: string
  label: string
}

export type Task = {
  id: string
  text: string
  completed: boolean
}

export type NewNote = {
  title: string
  content: string
  tags: Tag[]
  tasks: Task[]
  updatedAt: Date
}

export type Note = {
  id: string
  createdAt: Date
} & NewNote

function App() {
  const { theme } = useContext(ThemeContext);

  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchNotesData = () => {
    try {
      // Obtener notas y etiquetas de localStorage
      const storedNotes = getNotesFromStorage();
      const storedTags = getTagsFromStorage();

      setNotes(storedNotes);
      setTags(storedTags.length > 0 ? storedTags : testTags);
      
      // Guardar etiquetas por defecto si no existen
      if (storedTags.length === 0) {
        saveTagsToStorage(testTags);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNotesData()
  }, [])

  const handleNewNote = (newNote: NewNote) => {
    const noteWithId = {
      ...newNote,
      id: new Date().valueOf().toString(),
      createdAt: new Date()
    };
    const newNotes = [noteWithId, ...notes];
    setNotes(newNotes);
    saveNotesToStorage(newNotes);
  }

  const handleNoteDelete = (noteId: string) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNotes(newNotes);
    saveNotesToStorage(newNotes);
  }

  const handleNoteEdit = (noteId: string, newData: NewNote) => {
    const newNotes = notes.map(note => {
      return note.id === noteId ? {
        ...newData,
        id: note.id,
        createdAt: note.createdAt
      } : note;
    })

    const sortedNotes = [...newNotes].sort((a, b) => {
      return b.updatedAt.getTime() - a.updatedAt.getTime();
    });
    setNotes(sortedNotes);
    saveNotesToStorage(sortedNotes);
  }

  const handleTaskToggle = (noteId: string, taskId: string) => {
    const newNotes = notes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          tasks: note.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
          updatedAt: new Date()
        };
      }
      return note;
    });
    setNotes(newNotes);
    saveNotesToStorage(newNotes);
  }

  const handleTagCreate = (newTag: Tag) => {
    const newTags = [...tags, newTag];
    setTags(newTags);
    saveTagsToStorage(newTags);
  }

  return isLoading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <NotesContext.Provider value={{ notes, tags, handleNewNote, handleTagCreate, handleNoteEdit }}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/new' element={<NewNote />} />
            <Route path='/:id'>
              <Route index element={<NotePage notes={notes} onDelete={handleNoteDelete} onTaskToggle={handleTaskToggle} />} />
              <Route path='edit' element={<EditNote notes={notes} />} />
            </Route>
            <Route path='*' element={<NotFound title='Página no encontrada' />} />
          </Routes>
        </HashRouter>
      </NotesContext.Provider>
    </ThemeProvider>
  )
}

export default App
