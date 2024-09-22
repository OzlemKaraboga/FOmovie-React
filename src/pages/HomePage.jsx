/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieSearchContainer from '../components/SearchContainer';
import { useFetch } from '../hooks/useFetch';

// List of default movie categories
const defaultCategories = [
    'action',
    'adventure',
    'animation',
    'comedy',
    'crime',
    'documentary',
    'drama',
    'family',
    'history',
    'horror',
    'music',
    'mystery',
    'science fiction',
    'tv movie',
    'thriller',
    'war',
    'western',
];

export const HomePage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movies, setMovies] = useState([]);
    const title =
        defaultCategories[Math.floor(Math.random() * defaultCategories.length)];
    const currentYear = new Date().getFullYear();
    const [isDataLoading, dataError, getJson] = useFetch(
        `${apiUrl}?apikey=${apiKey}&s=${title}&y=${currentYear}`,
        setMovies,
    );
    useEffect(() => {
        getJson();
    }, []);

    return (
        <>
            <Header />
            <MovieSearchContainer movies={movies.Search} setMovies={setMovies} />
            <Footer />
        </>
    );
};
