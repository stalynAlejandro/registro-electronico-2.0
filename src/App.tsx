import { router } from './routes';
import { Loading } from './pages/Loading';
import { IConfig } from './vite-env';
import { persistor } from './redux';
import { setConfig } from './redux/config';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { MuiThemeProvider } from './themes/ThemeProvider';
import { Suspense, useEffect, useState } from 'react';

export default function App() {
    const dispatch = useAppDispatch();
    const config = useFetchConfig()[0] as IConfig;
    const [gateLifted, setGateLifted] = useState<boolean>(false);

    const onBeforeLift = () => {
        setTimeout(() => setGateLifted(true), 1800);
    };

    useEffect(() => {
        if (config) dispatch(setConfig(config));
    }, [config, dispatch, setConfig]);

    return (
        <PersistGate loading={<Loading />} persistor={persistor} onBeforeLift={onBeforeLift}>
            <MuiThemeProvider configTheme={config?.theme}>
                <Suspense fallback={<Loading />}>
                    <CssBaseline />
                    {gateLifted ? (
                        <RouterProvider fallbackElement={<Loading />} router={router} />
                    ) : (
                        <Loading />
                    )}
                </Suspense>
            </MuiThemeProvider>
        </PersistGate>
    );
}
