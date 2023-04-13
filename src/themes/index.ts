import { responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

export const baseTheme = createTheme({
    typography: {
        fontFamily: ['Fira Code', 'Roboto'].join(','),
    },
});

export const darkTheme = createTheme({
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
});

export const lightTheme = createTheme({
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
});

export const dimedTheme = createTheme({
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
});

export const darkDimedTheme = createTheme({
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
});
