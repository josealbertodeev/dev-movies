import api from "../../services/api"
import { Background } from "./styles"
import { useState } from "react"

function Home() {

    const [movie, setMovies] = useState()

    async function getMovies() {
        const data = await api.get('/movie/popular')

        // setMovies(data.data.results[1])

        // console.log(movie)

    }

    getMovies()

    return (
        <>
            {movie && (

                <Background img="https://image.tmdb.org/t/p/original/c55sXCaQBj3vuHqZe62tv90xCQS.jpg">
                    <h1>{movie.title}</h1>
                    <p>Essa é a Home</p>
                </Background>
            )}
        </>
    )
}

export default Home

