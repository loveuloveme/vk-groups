import { useState, useEffect, useCallback } from 'react';

type UseMockFetchReturnType<T> = {
    data: T | null;
    isLoading: boolean;
    error: unknown;
    fetch: () => void;
};


type UseMockFetchOptions = {
    lazy: boolean;
};

function useMockFetch<T>(request: () => Promise<T>, options: UseMockFetchOptions = { lazy: true }): UseMockFetchReturnType<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const fetch = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await request();
            setData(response);
        } catch (e) {
            setError(e);
            setData(null);
        }


        setIsLoading(false);
    }, [request]);

    useEffect(() => {
        if (options.lazy) {
            fetch();
        }
    }, []);

    return { fetch, data, isLoading, error };
}

export default useMockFetch;