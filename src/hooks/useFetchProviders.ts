import { IProviders } from '../vite-env';
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchProviders(id: string): [IProviders | undefined, boolean, boolean] {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [providers, setProviders] = useState<IProviders | undefined>({
        allowed: ['clave', 'valid', 'giltza', 'digital-certificate', 'unverified'],
        id: 'dev',
        title: 'Opina y participa en el portal de transparencia',
        description:
            'Este trámite te permite opinar acerca del funcionamiento y la información del portal de transparencia, y proponer sugerencias en materia de transparencia, acceso a la información pública y buen gobierno',
        loa: 1,
    });

    useEffect(() => {
        async function fetchProviders() {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/requests/${id}/providers`)
                    .then(response => response.json())
                    .catch(e => {
                        throw Error(e);
                    });
                setProviders(res);
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
                // setProviders(undefined);
            }
        }
        fetchProviders();
    }, []);

    return [providers, loading, error];
}
