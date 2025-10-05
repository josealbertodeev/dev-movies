import { useEffect, useState } from "react"
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import { getMovieById, getMovieCredits, getMovieSimiliar, getMovieVideos } from "../../services/getData"
import { useParams } from "react-router-dom"
import { getImages } from "../../utils/getImages"
import SpanGeneros from "../../components/SpanGeneros"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"

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
                    setMovie(movie)
                    setMovieVideos(videos) 
                    setMovieCredits(credits)
                    setMovieSimiliar(similiar)

                })

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
                            <SpanGeneros genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies></ContainerMovies>

                    {movieSimiliar && <Slider info={movieSimiliar} title={'Filmes Similiares'} />}
                    
                </>
            )
            }
        </>
    )
}

export default Detalhe
