import React, { useContext, useState } from 'react';
import defaultImage from '../assets/default-card-image.png';
import { useNavigate } from 'react-router-dom';
//import FavoriteContext, {
FavoriteContextProvider,
} from '../context/FavoritesContext';

// React MovieCard Component
const MovieCard = ({ movie }) => {
    const { Poster, Title, imdbID } = movie;
    const navigate = useNavigate();
    const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
    const isFav = isFavorite(imdbID);

    const handleClick = async () => {
        navigate(`/movie/${imdbID}`);
    };
    return (
        <div
            className="movie-card"
            id="movie-card"
            style={{ position: 'relative' }}
        >
            <img
                className="movie-img"
                id="movie-img"
                src={Poster !== 'N/A' ? Poster : defaultImage}
                alt={Title}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <p className="see-more" id="see-more" onClick={handleClick}>
                    See more
                </p>
                <p
                    className="see-more"
                    id="see-more"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(imdbID);
                    }}
                >
                    {isFav ? 'Remove Favorite' : 'Add Favorite'}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
