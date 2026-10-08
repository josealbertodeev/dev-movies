import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButton } from "./styles"
import Button from "../../components/Header/Button"
import { useState, useEffect } from "react"
import Slider from "../../components/Header/Slider"

function Home() {
    const [movie, setMovie] = useState([])
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get('movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies() {

            const { data: { results } } = await api.get('movie/top_rated')

            console.log(results)
            setTopMovies(results)
        }
        getMovies()
        getTopMovies()
    }, [])

    return (
        <>
            {movie && (
                <Background imagem={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>

                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            { topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider> }
        </>
    )
}
export default Home