import { useLocation } from 'react-router-dom';
import { Fade, Typography, styled } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export function Auth() {
    const location = useLocation();

    return (
        <Fade in={true} timeout={1000}>
            <Div>
                <Typography variant={'h1'} children={location.state} />
            </Div>
        </Fade>
    );
}
