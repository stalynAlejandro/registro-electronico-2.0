import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../themes/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import {
    ButtonProps,
    ButtonsThemesProps,
    ButtonsOptionsProps,
    ButtonContainer,
    ButtonContainerLang,
    ButtonStyled,
    WelcomeContainer,
    ButtonsLangProps,
} from './styled';

export function Welcome() {
    let navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { themeName, setThemeName } = useContext(ThemeContext);

    const themeIsSelected = (th: string) => (th === themeName ? 'contained' : 'outlined');
    const languageIsSelected = (lg: string) => (lg === i18n.language ? 'contained' : 'outlined');
    const handleClickNavigateToAuth = (op: string) => navigate('/auth', { state: op });

    return (
        <Fade in={true} timeout={1000}>
            <WelcomeContainer>
                <Typography variant={'h1'} children={t('hello')} />
                <Typography variant={'h6'} children={t('title')} />
                <ButtonContainerLang>
                    {ButtonsLangProps.map((lg: ButtonProps) => (
                        <ButtonStyled
                            children={lg.label}
                            variant={languageIsSelected(lg.name)}
                            onClick={() => i18n.changeLanguage(lg.name)}
                        />
                    ))}
                </ButtonContainerLang>

                <Typography variant={'h5'} children={t('findThemesHere')} />
                <ButtonContainer>
                    {ButtonsThemesProps.map((th: ButtonProps) => (
                        <ButtonStyled
                            onClick={() => setThemeName(th.name)}
                            variant={themeIsSelected(th.name)}
                            children={t(th.label)}
                        />
                    ))}
                </ButtonContainer>

                <Typography variant={'h5'} children={t('findDemosHere')} />
                <ButtonContainer>
                    {ButtonsOptionsProps.map((op: ButtonProps) => (
                        <ButtonStyled
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
