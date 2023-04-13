import { styled } from '@mui/material';
import { Container } from '@mui/system';

export const AuthContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(10),
    textAlign: 'center',
}));

export const CardContainer = styled('div')(({ theme, numCards }: { numCards: number }) => ({
    margin: 50,
    padding: 20,
    gridGap: 20,
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: `repeat(${numCards}, 1fr)`,
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: `repeat(${numCards - 1}, 1fr)`,
    },
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: `repeat(${numCards - 2}, 1fr)`,
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: `repeat(1, 1fr)`,
    },
}));
