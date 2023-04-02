import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const darkTheme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: ['Fira Code', 'Roboto'].join(','),
        },
        palette: {
            mode: 'dark',
            primary: { main: '#ff62fe' },
            secondary: { main: '#fff300' },
        },
    })
);

export const lightTheme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: ['Fira Code', 'Roboto'].join(','),
        },
        palette: {
            mode: 'light',
            primary: { main: '#ff62fe' },
            secondary: { main: '#fff300' },
        },
    })
);

export const dimedTheme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: ['Fira Code', 'Roboto'].join(','),
        },
        palette: {
            mode: 'light',
            primary: { main: '#41f2f3' },
            secondary: { main: '#4ff300' },
        },
    })
);

export const darkDimedTheme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: ['Fira Code', 'Roboto'].join(','),
        },
        palette: {
            mode: 'dark',
            primary: { main: '#41f2f3' },
            secondary: { main: '#4ff300' },
        },
    })
);
