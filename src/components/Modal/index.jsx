import { use } from "react"
import { Container, Background } from "./styles"
import { useEffect } from "react"
import api from "../../services/api"
import { useState } from "react"


function Modal({ movieId, setshowModal }) {

    const [movie, setMovie] = useState()

    useEffect(() => {

        async function getMovies() {

            const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

            console.log(results[0])
            setMovie(results[0])
        }
        getMovies()
    }, [])


    return (
        <Background onClick={() => setshowModal(false)}>
            {movie && (

                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} title='YouTube Video Player' height='500' width='100%'>

                    </iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal
