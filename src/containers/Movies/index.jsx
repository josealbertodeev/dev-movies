import { useEffect, useState } from "react"
import { Container } from "./styles"
import Slider from "../../components/Slider"
import { getTopMovies } from "../../services/getData" // ajuste conforme sua função

function Movies() {
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const data = await getTopMovies()
            setTopMovies(data.results || [])
        }
        fetchMovies()
    }, [])

    return (
        <Container>
            <h1>Filmes</h1>
            {topMovies.length > 0 && <Slider info={topMovies} title={'Top Filmes'} />}
        </Container>
    )
}

export default Movies

