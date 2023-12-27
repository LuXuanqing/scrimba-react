import logo from './assets/react-logo.png'

function Header() {
    return <header>
        <nav className="nav">
            <img src={logo} className="logo"></img >
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
}

export default Header