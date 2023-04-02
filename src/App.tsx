import { router } from './routes';
import { Loading } from './pages/Loading';
import { setConfig } from './redux/config';
import { useFetchConfig } from './hooks';
import { useAppDispatch } from './redux';
import { RouterProvider } from 'react-router-dom';
import { Suspense, createContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { MuiThemeProvider } from './themes/ThemeProvider';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {
    const dispatch = useAppDispatch();
    const config = useFetchConfig();

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
