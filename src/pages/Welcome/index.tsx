import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../themes/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import {
    ButtonProps,
    ButtonStyled,
    ButtonContainer,
    WelcomeContainer,
    ButtonsLangProps,
    ButtonsThemesProps,
    ButtonsOptionsProps,
    ButtonContainerLang,
    ButtonContainerTheme,
} from './styled';

export function Welcome() {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { themeName, setThemeToStore } = useContext(ThemeContext);

    const themeIsSelected = (th: string) => (th === themeName ? 'contained' : 'outlined');
    const languageIsSelected = (lg: string) => (lg === i18n.language ? 'contained' : 'outlined');
    const handleClickNavigateToAuth = (op: string) => navigate('/auth', { state: op });

    return (
        <Fade in={true} timeout={1000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={t('hello')} />
                <Typography variant={'h6'} children={t('title')} />
                <ButtonContainerLang>
                    {ButtonsLangProps.map((lg: ButtonProps, index: number) => (
                        <ButtonStyled
                            key={index}
                            children={lg.label}
                            variant={languageIsSelected(lg.name)}
                            onClick={() => i18n.changeLanguage(lg.name)}
                        />
                    ))}
                </ButtonContainerLang>

                <Typography variant={'h5'} children={t('findThemesHere')} />
                <ButtonContainerTheme>
                    {ButtonsThemesProps.map((th: ButtonProps, index: number) => (
                        <ButtonStyled
                            key={index}
                            onClick={() => setThemeToStore(th.name)}
                            variant={themeIsSelected(th.name)}
                            children={t(th.label)}
                        />
                    ))}
                </ButtonContainerTheme>

                <Typography variant={'h5'} children={t('findDemosHere')} />
                <ButtonContainer>
                    {ButtonsOptionsProps.map((op: ButtonProps, index: number) => (
                        <ButtonStyled
                            key={index}
                            children={op.label}
                            variant={'contained'}
                            onClick={() => handleClickNavigateToAuth(op.name)}
                        />
                    ))}
                </ButtonContainer>
            </WelcomeContainer>
        </Fade>
    );
}
