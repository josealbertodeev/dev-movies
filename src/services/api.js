import axios  from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5ca7e910e8adb31899dcef65f5831c78',
        language: 'pt-BR',
        page: 1
    }
})

export default api