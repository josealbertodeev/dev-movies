// Importa os componentes de estilo personalizados
import { Container, Li, Menu } from "./styles";
// Importa Link para navegação e useLocation para obter a rota atual
import { Link, useLocation } from "react-router-dom";
// Importa a imagem do logo
import logo from "../../assets/logo.png";

// Componente Header
function Header() {

    // Obtém o caminho atual da URL
    const {pathname} = useLocation();
    console.log(pathname); // Exibe o caminho atual no console

    return (
        // Container principal do header
        <Container>
            {/* Exibe o logo */}
            <img src={logo} alt="Logo" />
            {/* Menu de navegação */}
            <Menu>
                {/* Item Home, ativo se estiver na raiz */}
                <Li isActive={pathname === "/"}> 
                    <Link to="/">Home</Link>
                </Li>
                {/* Item Filmes, ativo se a URL incluir "/movies" */}
                <Li isActive={pathname.includes("/movies")}> 
                    <Link to="/movies">Filmes</Link>
                </Li>
                {/* Item Séries, ativo se a URL incluir "/series" */}
                <Li isActive={pathname.includes("/series")}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

// Exporta o componente Header
export default Header;
