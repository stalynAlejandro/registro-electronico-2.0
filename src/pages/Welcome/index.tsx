import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { ButtonContainer, ButtonContainerLang, ButtonStyled, WelcomeContainer } from './styled';

export function Welcome() {
    const { t, i18n } = useTranslation();

    setTimeout(() => {
        // i18n.changeLanguage('es');
        throw new Error();
    }, 4000);

    return (
        <Fade in={true} timeout={2000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={t('hello')} />
                <Typography variant={'h6'} children={t('title')} />
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
