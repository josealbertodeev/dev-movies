
import { Container, Li, Menu } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/movies">Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header;

