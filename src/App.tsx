import { router } from './routes';
import { useEffect } from 'react';
import { setConfig } from './redux/config';
import { mergeThemes } from './utils/mergeThemes';
import { ConfigProps } from './redux/config/types';
import { defaultTheme } from './themes';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function App() {
    const dispatch = useAppDispatch();
    const [config, loading, error] = useFetchConfig();

    const theme = mergeThemes({ newTheme: config?.theme as typeof defaultTheme });

    useEffect(() => {
        if (!loading && !error) dispatch(setConfig(config as ConfigProps));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
