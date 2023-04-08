import { IConfig } from '../vite-env';
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchConfig(): [IConfig | undefined, boolean, boolean] {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [config, setConfig] = useState<IConfig | undefined>(undefined);

    useEffect(() => {
        async function fetchConfig() {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/config`)
                    .then(response => response.json())
                    .catch(e => {
                        throw e;
                    });
                setConfig(res);
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
                setConfig(undefined);
            }
        }
        fetchConfig();
        return () => {
            setError(false);
            setLoading(false);
            setConfig(undefined);
        };
    }, []);

    return [config, loading, error];
}
