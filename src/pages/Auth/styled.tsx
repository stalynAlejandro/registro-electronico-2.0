import { styled } from '@mui/material';
import { Container } from '@mui/system';

export const AuthContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(10),
    textAlign: 'center',
}));

export const CardContainer = styled('div')(
    ({ theme, numCards }: { theme: any; numCards: number }) => ({
        margin: 150,
        padding: 20,
        gridGap: 20,
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
