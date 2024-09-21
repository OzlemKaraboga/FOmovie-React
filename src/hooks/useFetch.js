import { useState } from 'react';

export const useFetch = (url, onReceived) => {
    const [error, setError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const getJson = () => {
        setError(false);
        setIsLoading(true);

        const fetchData = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                setError(true);
            }
            const data = await response.json();
            onReceived(data);
            setIsLoading(false);
        };

        try {
            fetchData();
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    };

    return [isLoading, error, getJson];
};
