import { Conatainer, Menu, Li } from "./styles"
import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useState } from "react"

function Header() {

    const [changeBackground, setChangeBackground] = useState(false)

    const { pathname } = useLocation()

    window.onscroll = () => {
        if(window.pageYOffset > 100){
            setChangeBackground(true)
        }else{
            setChangeBackground(false)
        }
    }

    return (
        <Conatainer changeBackground={changeBackground}>
            <img src={Logo} alt="Logo" />
            <Menu>
                <Li isActive={pathname === "/" ? true : false}>
                    <Link to={"/"}>Home</Link>
                </Li>
                <Li isActive={pathname === "/movies" ? true : false}>
                    <Link to={"/movies"}>Filmes</Link>
                </Li>
                <Li isActive={pathname === "/series" ? true : false}>
                    <Link to={"/series"}>Séries</Link>
                </Li>
            </Menu>
        </Conatainer>
    )
}

export default Header

