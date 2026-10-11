import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getMediaList } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButton } from '../../pages/Home/styles'
import { Tabs, Tab, Grid, LoadMore, GridSection } from './styles'
import Button from '../Button'
import Card from '../Card'
import Modal from '../Modal'

const categories = [
    { key: 'popular', label: 'Populares' },
    { key: 'top_rated', label: 'Mais bem avaliados' }
]

function MediaPage({ type, title }) {
    const [featured, setFeatured] = useState()
    const [category, setCategory] = useState('popular')
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    const isMovie = type === 'movie'

    useEffect(() => {
        // top_rated para o destaque ser diferente do da Home (popular)
        getMediaList(type, 'top_rated')
            .then(results => setFeatured(results[0]))
            .catch(error => console.error(error))
    }, [type])

    useEffect(() => {
        setItems([])
        setPage(1)
        getMediaList(type, category, 1)
            .then(setItems)
            .catch(error => console.error(error))
    }, [type, category])

    async function loadMore() {
        const next = page + 1
        try {
            const results = await getMediaList(type, category, next)
            setItems(prev => [...prev, ...results])
            setPage(next)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {featured && (
                <Background $imagem={getImages(featured.backdrop_path)}>
                    {showModal && <Modal movieId={featured.id} type={type} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{featured.title || featured.name}</h1>
                            <p>{featured.overview}</p>
                            <ContainerButton>
                                {isMovie && (
                                    <Button red={true} onClick={() => navigate(`/detalhe/${featured.id}`)}>Assista Agora</Button>
                                )}
                                <Button red={!isMovie} onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            <img src={getImages(featured.poster_path)} alt="capa" />
                        </Poster>
                    </Container>
                </Background>
            )}

            <GridSection>
                <h2>{title}</h2>
                <Tabs>
                    {categories.map(c => (
                        <Tab key={c.key} $active={category === c.key} onClick={() => setCategory(c.key)}>
                            {c.label}
                        </Tab>
                    ))}
                </Tabs>
                <Grid>
                    {items.filter(item => item.poster_path).map(item => {
                        const card = <Card item={item} />
                        return isMovie
                            ? <Link key={item.id} to={`/detalhe/${item.id}`}>{card}</Link>
                            : <div key={item.id}>{card}</div>
                    })}
                </Grid>
                {items.length > 0 && <LoadMore onClick={loadMore}>Carregar mais</LoadMore>}
            </GridSection>
        </>
    )
}

export default MediaPage
