import { styled } from '@mui/system';

export const HeaderContainer = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '5rem',
    padding: '1rem',
    position: 'fixed',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
}));
