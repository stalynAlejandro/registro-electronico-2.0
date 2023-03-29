import React, { useState, useEffect } from 'react';
import { ConfigProps } from '../redux/config/types';

export function useFetchConfig(): [any | undefined, boolean, boolean] {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [config, setConfig] = useState<ConfigProps | undefined>(undefined);

    useEffect(() => {
        async function fetchConfig() {
            try {
                const res = await fetch('http://localhost:3010/config.json')
                    .then(response => response.json())
                    .catch(e => {
                        throw e;
                    });
                setConfig(res);
                setLoading(false);
            } catch (e) {
                setError(true);
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
