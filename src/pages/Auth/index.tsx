import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import { AuthContainer, CardContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Container, Fade, Typography } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';
import { AuthCard } from '../../components/AuthCard';

export function Auth() {
    const { state = '' } = useLocation();
    const { t } = useTranslation();

    const [providers, loading, error] = useFetchProviders('dev');

    return (
        <>
            {loading && <Loading />}
            <Fade in={true} timeout={1000}>
                <AuthContainer maxWidth="xl">
                    <Typography variant={'h1'} children={t('verifyIdentity')} />
                    <CardContainer numCards={2}>
                        <AuthCard
                            title={'clave'}
                            info={'clave'}
                            infoUser={'clave'}
                            type={'clave'}
                        />
                        <AuthCard
                            title={'clave'}
                            info={'clave'}
                            infoUser={'clave'}
                            type={'clave'}
                        />
                    </CardContainer>
                </AuthContainer>
            </Fade>
        </>
    );
}
