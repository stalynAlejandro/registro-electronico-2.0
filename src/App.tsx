import { router } from './routes';
import { Error } from './pages/Error';
import { Loading } from './pages/Loading';
import { setConfig } from './redux/config';
import { mergeThemes } from './utils/mergeThemes';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';

export default function App() {
    const dispatch = useAppDispatch();
    const config = useFetchConfig();
    const theme = mergeThemes(config?.theme);

    useEffect(() => {
        if (config) dispatch(setConfig(config));
    }, [config]);

    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    {config === undefined ? <Loading /> : <RouterProvider router={router} />}
                </Container>
            </ThemeProvider>
        </Suspense>
    );
}
