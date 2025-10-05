import { Container } from "./styles"

function SpanGeneros({ genres }) {
    return (
        <Container>
            {genres && genres.map(genres => (
                <span key={genres.id}>{genres.name}</span>
            ))}
        </Container>
    )
}

export default SpanGeneros
