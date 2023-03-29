import { useState } from 'react';
import { Container, Fade, styled } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
    height: '100vh',
    width: 'auto',
    backgroundColor: theme.palette.secondary.main,
}));

export function Home() {
    const [first, setfirst] = useState<boolean>(false);

    setTimeout(() => setfirst(true), 700);

    return (
        <Fade in={first} timeout={1000}>
            <Container fixed maxWidth={'lg'}>
                <Div />
            </Container>
        </Fade>
    );
}
