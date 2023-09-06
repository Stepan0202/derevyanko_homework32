import './Header.css'
function Header(){
    return(
        <header className="header">
            <div className="header__logo">COMPANY LOGO</div>
            <div className="header__menu menu">
                <p className="menu__item">Home</p>
                <p className="menu__item">About us</p>
                <p className="menu__item">Contacts</p>
            </div>
            <div className="header__buttons">
                <div className="btn btn-primary">Log in</div>
                <div className="btn btn-secondary">Sign in</div>
            </div>
        </header>
    )
}

export default Header;