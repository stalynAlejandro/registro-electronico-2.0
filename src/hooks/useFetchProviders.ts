import { IProviders } from '../vite-env';
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchProviders(id: string): [IProviders | undefined, boolean, boolean] {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [providers, setProviders] = useState<IProviders | undefined>(undefined);

    useEffect(() => {
        async function fetchProviders() {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/requests/${id}/providers`)
                    .then(response => response.json())
                    .catch(e => {
                        throw e;
                    });
                setProviders(res);
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
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
