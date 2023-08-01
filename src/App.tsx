import { router } from './routes';
import { Loading } from './pages/Loading';
import { persistor } from './redux';
import { setConfig } from './redux/config';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { MuiThemeProvider } from './themes/ThemeProvider';
import { Suspense, useEffect } from 'react';

export default function App() {
    const dispatch = useAppDispatch();
    const [config, loading] = useFetchConfig();

       useEffect(() => {
        if (config) dispatch(setConfig(config));
    }, [config && loading]);

    return (
        <PersistGate persistor={persistor}>
            <MuiThemeProvider configTheme={config?.theme}>
                <Suspense fallback={<Loading />}>
                    <CssBaseline />
                    {loading ? (
                        <Loading />
                    ) : (
                        <RouterProvider fallbackElement={<Loading />} router={router} />
                    )}
                </Suspense>
            </MuiThemeProvider>
        </PersistGate>
    );
}
