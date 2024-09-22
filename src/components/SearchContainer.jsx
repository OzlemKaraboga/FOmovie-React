import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useFetch } from '../hooks/useFetch';

// React Container Component for Movie Search Page
const MovieSearchContainer = (props) => {
    const { movies, setMovies } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const currentYear = new Date().getFullYear();

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [isLoading, error, getJson] = useFetch(
        `${apiUrl}?apikey=${apiKey}&s=${searchTerm}&y=${selectedYear ? selectedYear : currentYear}`,
        setMovies
    );

    const handleSearch = () => {
        getJson();
    };

    const years = [];
    let year = currentYear;
    while (year > 1990) {
        years.push(year);
        year--;
    }

    return (
        <div className="container" id="container">
            <div className="search-bar" id="search-bar">
                <input
                    className="search-input"
                    id="search-input"
                    type="text"
                    placeholder="Search with title"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select className="selectYear" id="selectYear" onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <button className="search-button" id="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="results">
                {movies &&
                    movies.map((movie) => {
                        return <MovieCard key={movie.imdbID} movie={movie} />;
                    })}
            </div>
        </div>
    );
};

export default MovieSearchContainer;