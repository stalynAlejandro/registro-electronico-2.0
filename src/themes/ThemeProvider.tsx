import React, { useState } from 'react';
import { setTheme } from '../redux/theme';
import { ThemeType } from '../vite-env';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { lightTheme, darkTheme, dimedTheme, darkDimedTheme } from './index';

const getThemeByName = (theme: string) => {
    return themeMap[theme];
};

export const themeMap: { [key: string]: any } = {
    lightTheme,
    darkTheme,
    dimedTheme,
    darkDimedTheme,
};

export const ThemeContext = React.createContext(getThemeByName('lightTheme'));

export const MuiThemeProvider = (props: {
    configTheme: any | undefined;
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
    const dispath = useAppDispatch();
    const appTheme = useSelector((state: RootState) => state.theme.theme);
    const [themeName, setThemeName] = useState(appTheme);

    const theme = props?.configTheme
        ? responsiveFontSizes(createTheme(props?.configTheme))
        : responsiveFontSizes(createTheme(getThemeByName(themeName)));

    const setThemeToStore = (theme: ThemeType) => {
        setThemeName(theme);
        dispath(setTheme(theme));
    };

    return (
        <ThemeContext.Provider value={{ themeName, setThemeToStore }}>
            <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
