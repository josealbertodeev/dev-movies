import { Conatainer, Menu, Li } from "./styles"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <Conatainer>
            <img src={Logo} alt="Logo" />
            <Menu>
                <Li>
                    <Link to={"/"}>Home</Link>
                </Li>
                <Li>
                    <Link to={"/movies"}>Filmes</Link>
                </Li>
                <Li>
                    <Link to={"/series"}>Séries</Link>
                </Li>
            </Menu>
        </Conatainer>
    )
}

export default Header