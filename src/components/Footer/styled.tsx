import { styled } from '@mui/system';

export const FooterContainer = styled('div')(({ theme }) => ({
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: '6rem',
    padding: '1rem',
    position: 'fixed',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
}));
