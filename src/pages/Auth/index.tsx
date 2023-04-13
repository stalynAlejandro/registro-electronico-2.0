import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import { AuthContainer, CardContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';
import { AuthCard } from '../../components/AuthCard';

export function Auth() {
    const { state = '' } = useLocation();
    const { t } = useTranslation();

    const [providers, loading, error] = useFetchProviders('saavdev');

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
                            {(!providers || providers?.allowed?.length === 0) && (
                                <AuthCard
                                    title={'clave'}
                                    info={'clave'}
                                    infoUser={'clave'}
                                    type={'clave'}
                                />
                            )}
                        </CardContainer>
                    </AuthContainer>
                </Fade>
            )}
        </>
    );
}
