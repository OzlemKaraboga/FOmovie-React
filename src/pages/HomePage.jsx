import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieSearchContainer from '../components/MovieSearchContainer';
import { useFetch } from '../hooks/useFetch';

// List of default movie categories
const defaultCategories = [
    'action',
    'adventure',
    'animation',
    'crime',
    'documentary',
    'drama',
    'family',
    'history',
    'horror',
    'music',
    'mystery',
    'science',
    'teen',
    'war',
    'western',
];

export const HomePage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [movies, setMovies] = useState([]);
    const title = defaultCategories[Math.floor(Math.random() * defaultCategories.length)];
    const [isDataLoading, error, getJson] = useFetch(
        `${apiUrl}?apikey=${apiKey}&s=${title}&y=${''}`,
        setMovies,
    );
    useEffect(() => {
        getJson();
    }, []);

    return (
        <>
            <Header />
            {isDataLoading ? (<p>Loading...</p>) :
                error ? (<p>There is an error</p>) :
                    (<MovieSearchContainer movies={movies.Search} setMovies={setMovies} />)}
            <Footer />
        </>
    );
};
