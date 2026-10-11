import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import { getIdMovie } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
    const [idMovie, setIdMovie] = useState()

    useEffect(() => {
        async function loadVideo() {
            setIdMovie(await getIdMovie(movieId))
        }
        loadVideo()
    }, [movieId])

    return (
        <Background onClick={() => setShowModal(false)}>
            {idMovie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${idMovie.key}`} title='Youtube Video Player' height={'500px'} width={'100%'}>

                    </iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal