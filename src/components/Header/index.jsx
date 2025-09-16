import logo from '../../assets/logo.png'

function Header(){
    return(
        <div>
            <img src={logo} alt="Logo-dev-movies" style={{width: 500}} />
        </div>
    )
}

export default Header