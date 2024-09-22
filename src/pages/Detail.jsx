import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import defaultImage from '../assets/default-card-image.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Detail = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const { imdbID } = useParams();

    const url = `${apiUrl}?apikey=${apiKey}&i=${imdbID}`;
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, error, getJson] = useFetch(url, setMovieInfo);

    useEffect(() => {
        getJson();
    }, []);

    return (
        <>
            <Header />
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>There was an error</p>
            ) : (
                <div style={{ backgroundColor: '#041322', color: '#FFFFFF' }}>
                    <h1>{movieInfo && movieInfo.Title}</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={
                                movieInfo && movieInfo.Poster !== 'N/A'
                                    ? movieInfo.Poster
                                    : defaultImage
                            }
                            alt={movieInfo && movieInfo.Title}
                        />
                        <div>
                            <p>Year: {movieInfo && movieInfo.Year}</p>
                            <p>Language: {movieInfo && movieInfo.Language}</p>
                            <p>Duration: {movieInfo && movieInfo.Runtime}</p>
                            <p>Imdb Rating: {movieInfo && movieInfo.imdbRating}</p>
                            <p>Director: {movieInfo && movieInfo.Director}</p>
                            <p>Writer: {movieInfo && movieInfo.Writer}</p>
                            <p>Actors: {movieInfo && movieInfo.Actors}</p>
                            <p>Description: {movieInfo && movieInfo.Plot}</p>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default Detail;