import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const customTheme = createTheme({
    typography: {
        fontFamily: ['Fira Code', 'Roboto'].join(','),
    },
    palette: {
        primary: { main: '#0f62fe' },
        secondary: { main: '#ffb300' },
    },
});

export const defaultTheme = responsiveFontSizes(
    createTheme(customTheme, {
        palette: {
            primary: { main: '#ff62fe' },
            secondary: { main: '#fff300' },
            info: {
                main: customTheme.palette.secondary.main,
            },
        },
        branding: {
            logo: {
                wide: '',
                square: '',
            },
        },
    })
);
