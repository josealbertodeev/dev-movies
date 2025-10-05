import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"
import { getTopMovies, getTopSeries, getPopularSeries, getTopPeople, getMovies } from "../../services/getData"


function Home() {

    const [movie, setMovie] = useState()
    const [showModal, setshowModal] = useState(false)
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    const navigate = useNavigate()

    useEffect(() => {

        async function getAllData() {

            // Executa tudo ao mesmo tempo
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()

                // then quando todos forem resolvidos
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {

                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setTopPeople(topPeople)

                })
        }

        getAllData()

    }, [])

    return (
        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>

                    <Container>
                        {showModal && <Modal movieId={movie.id} setshowModal={setshowModal} />}
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>

                                <Button onClick={() => setshowModal(true)} red={false}>Assista o Trailer</Button>
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

