import Button from '../../components/Button';
import Slider from '../../components/Slider';
import api from '../../services/api';
import { getImages } from '../../utils/getImages';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import { useState, useEffect } from 'react';

function Home() {
    const [movie, setMovies] = useState();
    const [topMovie, setTopMovie] = useState();

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get("/movie/popular")
            setMovies(results[4]);
        }

        async function getTopMovies() {

            const { data: { results } } = await api.get("/movie/top_rated")

            console.log(results);
            setTopMovie(results);
        }

        getMovies();
        getTopMovies();
    }, [])



    return (
        <>
            {/* Se a imagem do filme existir, exiba o background */}

            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assista agora</Button>
                                <Button white={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt="capa do filme" src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
        </>
    );
}

export default Home;
