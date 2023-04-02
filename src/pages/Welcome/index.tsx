import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../themes/ThemeProvider';
import { Fade, Typography } from '@mui/material';
import { ButtonContainer, ButtonContainerLang, ButtonStyled, WelcomeContainer } from './styled';

export function Welcome() {
    const { t, i18n } = useTranslation();
    const { themeName, setThemeName } = useContext(ThemeContext);

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
                    <ButtonStyled
                        onClick={() => setThemeName('lightTheme')}
                        variant={themeName === 'lightTheme' ? 'contained' : 'outlined'}
                        children={t('theme.light')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('darkTheme')}
                        variant={themeName === 'darkTheme' ? 'contained' : 'outlined'}
                        children={t('theme.dark')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('dimedTheme')}
                        variant={themeName === 'dimedTheme' ? 'contained' : 'outlined'}
                        children={t('theme.config')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('darkDimedTheme')}
                        variant={themeName === 'darkDimedTheme' ? 'contained' : 'outlined'}
                        children={t('theme.default')}
                    />
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
