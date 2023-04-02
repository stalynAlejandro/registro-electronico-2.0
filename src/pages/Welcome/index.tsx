import { Fade, Typography } from '@mui/material';
import { ButtonContainer, ButtonContainerLang, ButtonStyled, WelcomeContainer } from './styled';

export function Welcome() {
    setTimeout(() => {
        throw new Error();
    }, 1000);

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
