// Header.jsx
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            <p>Discover Movies on FOmovie</p>
            <p>
                <span onClick={(e) => {
                    e.preventDefault();
                    navigate('/favorites');
                }}>
                    Favorites
                </span>
                <Link to={'/'}>HomePage</Link>
            </p>
        </header>
    );
};

export default Header;