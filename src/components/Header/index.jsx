import { Container, Menu, Li } from "./styles";
import { Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { useEffect, useState } from "react";

function Header() {
    const {pathname} = useLocation()
    const [changeBackground, setchangeBackground ] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setchangeBackground(window.scrollY > 150)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt="Logo-dev-movies" />
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('/series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}
export default Header 