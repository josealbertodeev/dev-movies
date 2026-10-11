import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from "../../services/getData"
import { Background, Info, Poster, Container, ContainerButton } from "./styles"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getImages } from "../../utils/getImages"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import Modal from "../../components/Modal"

function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ]).then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setTopPeople(topPeople)
            })
                .catch(error => console.error(error))
        }
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background $imagem={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)} >Assista o Trailer</Button>
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