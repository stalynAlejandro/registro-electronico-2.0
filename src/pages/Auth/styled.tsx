import { styled } from '@mui/material';
import { Container } from '@mui/system';

export const AuthContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 60,
}));

export const CardContainer = styled('div')(
    ({ theme, numCards }: { theme?: any; numCards: number }) => ({
        gridGap: 20,
        padding: 100,
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: `repeat(${numCards > 4 ? 3 : numCards}, 1fr)`,
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: `repeat(${numCards > 3 ? 3 : numCards}, 1fr)`,
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: `repeat(${numCards > 2 ? 2 : numCards}, 1fr)`,
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: `repeat(1, 1fr)`,
        },
    })
);

export const FooterContainer = styled('div')(({ theme }) => ({
    minHeight: 100,
    width: '50%',
    display: 'flex',
    marginTop: 'auto',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        minHeight: 180,
    },
}));
