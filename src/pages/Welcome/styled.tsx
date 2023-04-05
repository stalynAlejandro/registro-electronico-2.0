import { Button, styled } from '@mui/material';

export type ButtonProps = {
    name: string;
    label: string;
};

export const ButtonsLangProps: ButtonProps[] = [
    {
        name: 'en',
        label: 'English',
    },
    {
        name: 'es',
        label: 'Español',
    },
    {
        name: 'ca',
        label: 'Catalá',
    },
];

export const ButtonsThemesProps: ButtonProps[] = [
    {
        name: 'lightTheme',
        label: 'theme.light',
    },
    {
        name: 'darkTheme',
        label: 'theme.dark',
    },
    {
        name: 'dimedTheme',
        label: 'theme.config',
    },
    {
        name: 'darkDimedTheme',
        label: 'theme.default',
    },
];

export const ButtonsOptionsProps: ButtonProps[] = [
    {
        name: 'all',
        label: 'All Options',
    },
    {
        name: 'triple',
        label: 'Triple',
    },
    {
        name: 'single',
        label: 'Single',
    },
    {
        name: 'noauth',
        label: 'No Auth',
    },
];

export const ButtonStyled = styled(Button)(({ theme }) => ({
    width: '9rem',
    height: '2.2rem',
    [theme.breakpoints.down('sm')]: {},
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
    width: '40rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        height: '12rem',
        marginBottom: 30,
        flexDirection: 'column',
    },
}));

export const ButtonContainerLang = styled(ButtonContainer)(({ theme }) => ({
    width: '30rem',
}));

export const WelcomeContainer = styled('div')(({ theme }) => ({
    margin: 0,
    width: 'auto',
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
}));
