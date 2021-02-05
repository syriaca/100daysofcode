import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(data => data.json(data))
            .then(data => {
                setData(data);
                setIsLoading(false);
                setIsError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setIsError(error.message);
            })
    }, [url]);

    return {isLoading, isError, data}
};

export default useFetch;
