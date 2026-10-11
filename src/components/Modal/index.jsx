import { useEffect, useState } from 'react'
import { Container, Background, CloseButton } from './styles'
import { getIdMovie } from '../../services/getData'

function Modal({ movieId, setShowModal, type = 'movie' }) {
    const [idMovie, setIdMovie] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function loadVideo() {
            try {
                setIdMovie(await getIdMovie(movieId, type))
            } catch (error) {
                console.error(error)
            }
            setLoaded(true)
        }
        loadVideo()
    }, [movieId, type])

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') setShowModal(false)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [setShowModal])

    return (
        <Background onClick={() => setShowModal(false)}>
            <Container onClick={e => e.stopPropagation()}>
                <CloseButton type='button' aria-label='Fechar' onClick={() => setShowModal(false)}>
                    &times;
                </CloseButton>
                {idMovie && (
                    <iframe src={`https://www.youtube.com/embed/${idMovie.key}`} title='Youtube Video Player' allowFullScreen>
                    </iframe>
                )}
                {loaded && !idMovie && <p>Trailer indisponível.</p>}
            </Container>
        </Background>
    )
}

export default Modal
