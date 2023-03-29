import { router } from './routes';
import { Loading } from './pages/Loading';
import { useEffect } from 'react';
import { setConfig } from './redux/config';
import { mergeThemes } from './utils/mergeThemes';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App() {
    const dispatch = useAppDispatch();
    const [config, loading, error] = useFetchConfig();
    const theme = mergeThemes({ newTheme: config?.theme });

    useEffect(() => {
        if (config) dispatch(setConfig(config));
    }, [config]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {config ? <RouterProvider router={router} /> : <Loading />}
        </ThemeProvider>
    );
}
