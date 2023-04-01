import { Button, Fade, Typography, styled } from '@mui/material';
import { Box, css } from '@mui/system';

const ButtonStyled = styled(Button)(
    ({ theme }) => css`
        height: 30;
    `
);

const ButtonContainerLang = styled('div')(({ theme }) => ({
    width: '30%',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const ButtonContainer = styled('div')(({ theme }) => ({
    width: '40%',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
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
                <Typography variant={'h6'} children={'if your lang !== mylang'} />
                <ButtonContainerLang>
                    <ButtonStyled variant="contained" children="Español" />
                    <ButtonStyled variant="contained" children="Catalá" />
                    <ButtonStyled variant="outlined" children="Galego" />
                    <ButtonStyled variant="text" children="Euskera" />
                </ButtonContainerLang>
                <Typography variant={'h5'} children={'Hello dev, find some demos here: '} />
                <ButtonContainer>
                    <ButtonStyled variant="contained" children="All Options" />
                    <ButtonStyled variant="contained" children="All Options" />
                    <ButtonStyled variant="outlined" children="Triple" />
                    <ButtonStyled variant="text" children="Single" />
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
