import { styled } from '@mui/material';
import { Container } from '@mui/system';

export const AuthContainer = styled(Container)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
}));
