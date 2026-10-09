import api from "../../services/api"
import { Background, Info, Poster, Container, ContainerButton } from "./styles"
import Button from "../../components/Header/Button"
import { useState, useEffect } from "react"
import Slider from "../../components/Header/Slider"
import { getImages } from "../../utils/getImages"

function Home() {
    const [movie, setMovie] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [topSeries, setTopSeries] = useState([])
    const [popularSeries, setPopularSeries] = useState([])
    const [topPeople, setTopPeople] = useState([])

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get('movie/popular')
            setMovie(results[0])
        }

        async function getTopMovies() {

            const { data: { results } } = await api.get('movie/top_rated')
            setTopMovies(results)
        }

        async function getTopSeries() {

            const { data: { results } } = await api.get('tv/top_rated')
            setTopSeries(results)
        }

        async function getPopularSeries() {

            const { data: { results } } = await api.get('tv/popular')
            console.log(results)
            setPopularSeries(results)
        }

        async function getTopPeople() {

            const { data: { results } } = await api.get('person/popular')
            console.log(results)
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
                <Background imagem={getImages(movie.backdrop_path)}>

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
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}></Slider>}
            {topSeries && <Slider info={topSeries} title={'Top Series'}></Slider>}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'}></Slider>}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'}></Slider>}
        </>
    )
}
export default Home