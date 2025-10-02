import { useEffect, useState } from "react"
import { Container, Background, Cover, Info } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimiliar, getMovieVideos } from "../../services/getData"
import { useParams } from "react-router-dom"
import { getImages } from "../../utils/getImages"

function Detalhe() {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimiliar, setMovieSimiliar] = useState()

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimiliar(id)

            ])
                .then(([movie, videos, credits, similiar]) => {

                    console.log({ movie, videos, credits, similiar })
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimiliar(similiar)

                })
                .catch(error => console.log(error))

        }

        getAllData()

    }, [])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <div>Generos</div>
                            <p>{movie.overview}</p>
                            <div>Créditos</div>
                        </Info>
                        <div>Detalhe</div>
                    </Container>
                </>
            )
            }
        </>
    )
}

export default Detalhe
