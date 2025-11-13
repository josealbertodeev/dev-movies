import { useEffect } from "react";
import Container from "./styles";
import api from "../../services/api";

function Modal({ movieId }) {

    const [movie, setMovie] = useState();

    useEffect(() => {
        async function getMovies() {

            const { data: { results } } = await api.get("/movie/popular")
            setMovie(results[4]);
        }

        return (
            <Container>
                <div>{movieId}</div>
            </Container>
        )
    }

export default Modal;