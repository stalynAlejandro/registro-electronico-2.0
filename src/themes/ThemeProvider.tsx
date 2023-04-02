import React, { useState } from 'react';
import { lightTheme, darkTheme, dimedTheme, darkDimedTheme } from './index';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

const getThemeByName = (theme: string) => {
    return themeMap[theme];
};

const themeMap: { [key: string]: any } = {
    lightTheme,
    darkTheme,
    dimedTheme,
    darkDimedTheme,
};

export const ThemeContext = React.createContext(getThemeByName('lightTheme'));

export const MuiThemeProvider = (props: {
    configTheme: any;
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
    const [themeName, _setThemeName] = useState('lightTheme');
    const theme = props?.configTheme
        ? createTheme(props?.configTheme)
        : responsiveFontSizes(createTheme(getThemeByName(themeName)));

    return (
        <ThemeContext.Provider value={_setThemeName}>
            <ThemeProvider theme={theme}>{props?.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
