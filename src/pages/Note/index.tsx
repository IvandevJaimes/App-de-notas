import { Link, useNavigate, useParams } from "react-router-dom"
import { Note as NoteType } from "../../App";
import { ElementsGroup, Date, DeleteButton, Tag, TagsWrapper, NoteParagraph, TasksDisplaySection, TaskDisplayItem, TaskCheckbox, TaskDisplayText } from "./styles";
import { Button, FAIcon, Header, Wrapper } from "../../styles";
import { dateFormat, timeFormat } from "../../utils/dateFormat";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { NotFound } from "../NotFound";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const urlRegex = /(https?:\/\/[^\s]+)/g

type NoteProps = {
  notes: NoteType[]
  onDelete: (noteId: string) => void
  onTaskToggle: (noteId: string, taskId: string) => void
}

export const Note = ({ notes, onDelete, onTaskToggle }: NoteProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note: NoteType | undefined = notes.find(noteElem => noteElem.id == id);
  const noteContent = note ? note.content.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`) : ''

  const handleDelete = () => {
    onDelete(note!.id);
    navigate('/');
  }

  useEffect(() => {
    if (note) {
      document.title = note.title
    }

    return () => {
      document.title = 'Aplicación de notas'
    }
  }, [])

  return note ? (
    <Wrapper>
      <Header>
        <h1>{note.title}</h1>
        <ElementsGroup>
          <DeleteButton onClick={handleDelete}>
            <FAIcon icon={faTrashCan} />
            <span>Eliminar</span>
          </DeleteButton>
          <Link to='./edit'>
            <Button>
              <FAIcon icon={faPenToSquare} />
              <span>Editar</span>
            </Button>
          </Link>
          <Link to='..' aria-label='volver'>
            <Button aria-label='volver'>
              <FAIcon icon={faArrowLeft} />
            </Button>
          </Link>
        </ElementsGroup>
      </Header>
      <TagsWrapper>
        {note.tags.map(({id, label}) => (
          <Tag key={id}>{label}</Tag>
        ))}
      </TagsWrapper>
      
      {note.tasks && note.tasks.length > 0 && (
        <TasksDisplaySection>
          <h3>Tareas</h3>
          {note.tasks.map(task => (
            <TaskDisplayItem key={task.id} $completed={task.completed}>
              <TaskCheckbox
                type="checkbox"
                checked={task.completed}
                onChange={() => onTaskToggle(note.id, task.id)}
              />
              <TaskDisplayText $completed={task.completed}>{task.text}</TaskDisplayText>
            </TaskDisplayItem>
          ))}
        </TasksDisplaySection>
      )}
      
      <Date>Última actualización el {dateFormat(note.updatedAt)} a las {timeFormat(note.updatedAt)}</Date>
      {noteContent.split('\n').map((paragraph, i) => (
        <NoteParagraph
          key={i}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></NoteParagraph>
      ))}
    </Wrapper>
  ) : (
    <NotFound title={'Esta nota no existe'} />
  )
}