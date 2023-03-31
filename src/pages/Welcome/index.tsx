import { Button, Fade, Typography, styled } from '@mui/material';

const ButtonContainer = styled('div')(({ theme }) => ({
    height: '4rem',
    width: '20%',
    display: 'flex',
    justifyContent: 'space-between',
}));

const WelcomeContainer = styled('div')(({ theme }) => ({
    margin: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
}));

export function Welcome() {
    return (
        <Fade in={true} timeout={2000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={'¡Hola Mundo!'} />
                <Typography variant={'body1'} children={'Hello dev, find some demos here: '} />
                <ButtonContainer>
                    <Button variant="contained" children="All Options" />
                    <Button variant="outlined" children="Triple" />
                    <Button variant="text" children="Single" />
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
