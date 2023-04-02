import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { ButtonContainer, ButtonContainerLang, ButtonStyled, WelcomeContainer } from './styled';

export function Welcome() {
    const { t, i18n } = useTranslation();

    return (
        <Fade in={true} timeout={2000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={t('hello')} />
                <Typography variant={'h6'} children={t('title')} />
                <ButtonContainerLang>
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('en')}
                        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
                        children="English"
                    />
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('es')}
                        variant={i18n.language === 'es' ? 'contained' : 'outlined'}
                        children="Español"
                    />
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('ca')}
                        variant={i18n.language === 'ca' ? 'contained' : 'outlined'}
                        children="Catalá"
                    />
                </ButtonContainerLang>
                <Typography variant={'h5'} children={t('findThemesHere')} />
                <ButtonContainer>
                    <ButtonStyled variant="contained" children={t('theme.light')} />
                    <ButtonStyled variant="contained" children={t('theme.dark')} />
                    <ButtonStyled variant="contained" children={t('theme.config')} />
                    <ButtonStyled variant="contained" children={t('theme.default')} />
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
