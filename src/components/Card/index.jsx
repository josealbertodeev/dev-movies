import { Container } from "./styles"
import { getImages } from "../../utils/getImages"

function Card({ item }) {
    return (
        <Container>
            <div>
                <img src={getImages(item.poster_path || item.profile_path || '')} />
                <h3>{item.title || item.name}</h3>
            </div>
        </Container>
    )
}

export default Card