import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import Button from "../../components/Button"
import { useState, useEffect } from "react"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"

function Home() {

    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get('/movie/popular')

            console.log(results)
            setMovie(results[1])
        }

        async function getTopMovies() {

            const { data: { results } } = await api.get('/movie/top_rated')
            setTopMovies(results)
        }

        async function getTopSeries() {

            const { data: { results } } = await api.get('/tv/top_rated')
            setTopSeries(results)

        }

        async function getPopularSeries() {

            const { data: { results } } = await api.get('/tv/popular')
            setPopularSeries(results)

        }

        async function getTopPeople() {

            const { data: { results } } = await api.get('/person/popular')
            setTopPeople(results)

        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()

    }, [])

    return (
        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Modal movieId={movie.id}/>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img src={getImages(movie.poster_path)} />
                        </Poster>

                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}

export default Home

