import { Link } from "react-router-dom"
import { Button, FAIcon, Header, Wrapper } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export const NewNote = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Crear nota</h1>
        <Link to='..' aria-label='volver'>
          <Button aria-label='volver'>
            <FAIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </Header>
      <NoteForm />
    </Wrapper>
  )
}
