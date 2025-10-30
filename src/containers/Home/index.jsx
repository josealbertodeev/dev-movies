import Button from '../../components/Button';
import api from '../../services/api';
import { Background, Container, ContainerButtons, Info, Poster } from './styles';
import { useState, useEffect } from 'react';

function Home() {
    const [movie, setMovies] = useState();

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get("/movie/popular")
            setMovies(results[9]);
        }

        getMovies();
    }, [])



    return (
        <>
            {/* Se a imagem do filme existir, exiba o background */}

            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
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
                            <img alt="capa do filme" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    );
}

export default Home;
