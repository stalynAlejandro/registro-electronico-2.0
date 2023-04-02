import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { ThemeContext } from '../../themes/ThemeProvider';
import { ButtonContainer, ButtonContainerLang, ButtonStyled, WelcomeContainer } from './styled';

export function Welcome() {
    const { t, i18n } = useTranslation();
    const { themeName, setThemeName } = useContext(ThemeContext);

    const languageIsSelected = (lang: string) =>
        lang === i18n.language ? 'contained' : 'outlined';

    const themeIsSelected = (theme: string) => (theme === themeName ? 'contained' : 'outlined');

    return (
        <Fade in={true} timeout={2000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={t('hello')} />
                <Typography variant={'h6'} children={t('title')} />
                <ButtonContainerLang>
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('en')}
                        variant={languageIsSelected('en')}
                        children="English"
                    />
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('es')}
                        variant={languageIsSelected('es')}
                        children="Español"
                    />
                    <ButtonStyled
                        onClick={() => i18n.changeLanguage('ca')}
                        variant={languageIsSelected('ca')}
                        children="Catalá"
                    />
                </ButtonContainerLang>
                <Typography variant={'h5'} children={t('findThemesHere')} />
                <ButtonContainer>
                    <ButtonStyled
                        onClick={() => setThemeName('lightTheme')}
                        variant={themeIsSelected('lightTheme')}
                        children={t('theme.light')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('darkTheme')}
                        variant={themeIsSelected('darkTheme')}
                        children={t('theme.dark')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('dimedTheme')}
                        variant={themeIsSelected('dimedTheme')}
                        children={t('theme.config')}
                    />
                    <ButtonStyled
                        onClick={() => setThemeName('darkDimedTheme')}
                        variant={themeIsSelected('darkDimedTheme')}
                        children={t('theme.default')}
                    />
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
