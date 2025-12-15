import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { Note } from "../../App"
import { Button, FAIcon, Header, Wrapper } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NotFound } from "../NotFound"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

type EditNoteProps = {
  notes: Note[]
}

export const EditNote = ({ notes }: EditNoteProps) => {
  const { id } = useParams();
  const note: Note | undefined = notes.find(noteElem => noteElem.id == id);

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
        <h1>Editar nota</h1>
        <Link to='..' aria-label='volver'>
          <Button aria-label='volver'>
            <FAIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </Header>
      <NoteForm currentData={note} />
    </Wrapper>
  ) : (
    <NotFound title={'Esta nota no existe'} />
  )
}
