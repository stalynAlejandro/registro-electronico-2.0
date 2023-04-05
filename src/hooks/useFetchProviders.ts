import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchProviders(id: string): any | undefined {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [providers, setProviders] = useState<any | undefined>(undefined);

    useEffect(() => {
        async function fetchProviders() {
            console.log('fetchProviders');
            try {
                const res = await fetch(`${API_URL}/requests/${id}/providers`)
                    .then(response => response.json())
                    .catch(e => {
                        console.log('error', e);
                        throw e;
                    });
                setLoading(false);
                setProviders(res);

                console.log({ res });
            } catch (e) {
                setError(true);
                setProviders(undefined);
            }
        }
        fetchProviders();
        return () => {
            setError(false);
            setLoading(false);
            setProviders(undefined);
        };
    }, []);

    return [providers, loading, error];
}
