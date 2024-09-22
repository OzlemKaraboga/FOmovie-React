import React from 'react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

// React Header Component
const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            <p
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/favorites');
                }}
            >
                Favorites
            </p>
            <p>...Discover Movies on NouFilms...</p>
        </header>
    );
};

export default Header;
