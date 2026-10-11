import api from "./api";

export async function getMovies() {
    const { data: { results } } = await api.get('movie/popular')
    return results[0]
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('movie/top_rated')
    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get('tv/top_rated')
    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get('tv/popular')
    return results
}

export async function getTopPeople() {
    const { data: { results } } = await api.get('person/popular')
    return results
}

export async function getIdMovie(movieId, type = 'movie') {
    const { data: { results } } = await api.get(`${type}/${movieId}/videos`)
    if (results.length) return results[0]

    // muitos títulos não têm vídeo em pt-BR; tenta em inglês
    const { data: { results: fallback } } = await api.get(`${type}/${movieId}/videos`, { params: { language: 'en-US' } })
    return fallback.find(v => v.site === 'YouTube' && v.type === 'Trailer') || fallback.find(v => v.site === 'YouTube')
}

export async function getMediaList(type, category, page = 1) {
    const { data: { results } } = await api.get(`${type}/${category}`, { params: { page } })
    return results
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`movie/${movieId}/credits`)
    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`movie/${movieId}/similar`)
    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`movie/${movieId}`)
    return data
}

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`movie/${movieId}/videos`)
    return results
}