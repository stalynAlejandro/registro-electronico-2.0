import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import { AuthContainer, CardContainer, FooterContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';
import { AuthCard } from '../../components/AuthCard';
import { LngSelector } from '../../components/LngSelector';
import { ButtonsLangProps } from '../Welcome/styled';

export function Auth() {
    const { state = '' } = useLocation();
    const { t, i18n } = useTranslation();

    const [providers, loading, error] = useFetchProviders('saavdev');

    const listLanguages = ButtonsLangProps.map(({ label, name }) => ({
        label,
        value: name,
    }));

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Fade in={true} timeout={1000}>
                    <AuthContainer maxWidth="xl">
                        <Typography variant={'h2'} children={t('verifyIdentity')} />
                        <CardContainer numCards={(providers?.allowed?.length || 1) as number}>
                            {providers?.allowed?.map(type => (
                                <AuthCard title={type} info={type} infoUser={type} type={type} />
                            ))}
                        </CardContainer>
                        <FooterContainer>
                            <p>
                                Su identidad electrónica será utilizada para el siguiente trámite
                                administrativo:
                                <b>Opina y participa en el portal de transparencia</b>
                            </p>
                            <LngSelector
                                listLng={listLanguages}
                                currentLng={i18n.language.toUpperCase()}
                                changeLng={lng => i18n.changeLanguage(lng)}
                            />
                        </FooterContainer>
                    </AuthContainer>
                </Fade>
            )}
        </>
    );
}
