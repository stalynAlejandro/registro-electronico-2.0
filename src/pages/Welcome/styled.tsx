import { Button, styled } from '@mui/material';

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
        flexDirection: 'column',
        marginBottom: 30,
    },
}));

export const WelcomeContainer = styled('div')(({ theme }) => ({
    margin: 0,
    width: 'auto',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-around',
    },
}));
