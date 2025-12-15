import { useState, useEffect, useContext } from 'react';
import { Button, DisabledButton } from "../../styles"
import { InputGroup, RequiredMessage, TasksSection, TaskItem, TaskCheckbox, TaskText, TaskDeleteBtn } from "./styles"
import { useNavigate } from 'react-router-dom';
import { Note, Tag, Task } from '../../App'
import { NotesContext, NotesContextType } from '../../context/NotesContext';
import { TagsSelect } from '../TagsSelect';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FAIcon } from '../../styles';

type NoteFormProps = {
  currentData?: Note
}

export const NoteForm = ({ currentData }: NoteFormProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');

  const {
    handleNewNote: onSubmit,
    handleNoteEdit
  } = useContext(NotesContext) as NotesContextType;
  
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [isValueEmpty, setIsValueEmpty] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (currentData) {
      setTitleValue(currentData.title);
      setContentValue(currentData.content);
      setSelectedTags(currentData.tags);
      setTasks(currentData.tasks || []);
    }
  }, [])

  const removeWarning = (value: string) => {
    if (value.trim() && isValueEmpty) {
      setIsValueEmpty(false);
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    removeWarning(e.target.value);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
    removeWarning(e.target.value);
  }

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: new Date().valueOf().toString(),
        text: newTaskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (titleValue.trim() && contentValue.trim()) {
      const newNote = {
        title: titleValue,
        content: contentValue,
        tags: selectedTags,
        tasks: tasks,
        updatedAt: new Date()
      };

      currentData ? handleNoteEdit(currentData.id, newNote) : onSubmit(newNote);
      navigate('/');
    } else {
      setIsValueEmpty(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <label>Etiquetas</label>
        <TagsSelect
          isCreatable
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </InputGroup>
      <InputGroup $redShadow={isValueEmpty}>
        <label htmlFor="title">
          Título
          {isValueEmpty && <RequiredMessage>requerido</RequiredMessage>}
        </label>
        <input
          type="text"
          id="title"
          value={titleValue}
          onChange={handleTitleChange}
          placeholder="Título de la nota"
        />
      </InputGroup>
      <InputGroup $redShadow={isValueEmpty}>
        <label htmlFor="content">
          Contenido
          {isValueEmpty && <RequiredMessage>requerido</RequiredMessage>}
        </label>
        <textarea
          id="content"
          value={contentValue}
          onChange={handleContentChange}
          placeholder="Escribe el contenido de tu nota"
        ></textarea>
      </InputGroup>

      <TasksSection>
        <label htmlFor="newTask">Tareas</label>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input
            id="newTask"
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            placeholder="Añade una nueva tarea..."
            style={{
              flex: 1,
              padding: '10px',
              border: `2px solid ${document.documentElement.style.getPropertyValue('--rosa-pastel-500') || '#ff6aa8'}`,
              borderRadius: '8px',
              fontSize: 'inherit',
              fontFamily: 'inherit'
            }}
          />
          <button
            type="button"
            onClick={handleAddTask}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff6aa8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Añadir
          </button>
        </div>

        {tasks.length > 0 && (
          <div>
            {tasks.map(task => (
              <TaskItem key={task.id} $completed={task.completed}>
                <TaskCheckbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskToggle(task.id)}
                />
                <TaskText $completed={task.completed}>{task.text}</TaskText>
                <TaskDeleteBtn onClick={() => handleDeleteTask(task.id)}>
                  <FAIcon icon={faTrashCan} />
                </TaskDeleteBtn>
              </TaskItem>
            ))}
          </div>
        )}
      </TasksSection>

      {currentData ? (
        <>
          {
            currentData.title === titleValue &&
            currentData.content === contentValue &&
            currentData.tags === selectedTags &&
            JSON.stringify(currentData.tasks || []) === JSON.stringify(tasks) ? (
            <DisabledButton type='submit' disabled>Actualizar</DisabledButton>
          ) : (
            <Button type='submit'>Actualizar</Button>
          )}
        </>
      ) : (
        <Button type='submit'>Añadir</Button>
      )}
    </form>
  )
}
