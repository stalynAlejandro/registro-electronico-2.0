import { router } from './routes';
import { Loading } from './pages/Loading';
import { IConfig } from './vite-env';
import { setConfig } from './redux/config';
import { CssBaseline } from '@mui/material';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { MuiThemeProvider } from './themes/ThemeProvider';
import { Suspense, useEffect } from 'react';

export default function App() {
    const dispatch = useAppDispatch();
    const config = useFetchConfig()[0] as IConfig;

    useEffect(() => {
        if (config) dispatch(setConfig(config));
    }, [config]);

    return (
        <MuiThemeProvider configTheme={config?.theme}>
            <Suspense fallback={<Loading />}>
                <CssBaseline />
                <RouterProvider fallbackElement={<Loading />} router={router} />
            </Suspense>
        </MuiThemeProvider>
    );
}
