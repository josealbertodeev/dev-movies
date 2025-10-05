import api from "./api";

export async function getMovies() {
    const { data: { results } } = await api.get('/movie/popular')

    return results[1]
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get('/tv/popular')

    return results
}

export async function getTopPeople() {
    const { data: { results } } = await api.get('/person/popular')

    return results
}

// Busca filme pelo id 
export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    // se não colocar uma posição não carrega o video
    return results[0]
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimiliar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}