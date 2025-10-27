
import Logo from '../../assets/logo.png'

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo-devmovies" style={{ width: '400px' }} />
        </header>
    )
}

export default Header