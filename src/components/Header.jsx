// Header.jsx
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            <p>Discover Movies on FOmovie</p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '20%' }}>
                <Link to={'/favorites'}>
                    Favorites
                </Link>

                <Link to={'/'}>Home</Link>
            </div>

        </header>
    );
};

export default Header;