import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import { getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'

function Detail() {

    const { id } = useParams()
    const [movie, setmovie] = useState()
    const [movieVideos, setmovieVideos] = useState()
    const [movieCredits, setmovieCredits] = useState()
    const [movieSimilar, setmovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ]).then(([movie, videos, credits, similar]) => {
                console.log({ movie, videos, credits, similar })
                setmovie(movie)
                setmovieVideos(videos)
                setmovieCredits(credits)
                setmovieSimilar(similar)
            })
                .catch(error => console.error(error))
        }
        getAllData()
    }, [])

    return (
        <>
            {movie &&
                <>
                    <Background $image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="Imagem do Poster" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {movieVideos && movieVideos.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe src={`https://www.youtube.com/embed/${video.key}`} title='Youtube Video Player' height={'500px'} width={'100%'}>
                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'}></Slider>}
                </>
            }
        </>
    )
}

export default Detail