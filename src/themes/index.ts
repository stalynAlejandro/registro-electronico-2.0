import { responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

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
        status: {
            danger: '#ff0000',
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
        status: {
            danger: '#ff0000',
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
        status: {
            danger: '#ff0000',
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
        status: {
            danger: '#ff0000',
        },
    })
);
