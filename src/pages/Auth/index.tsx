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
                        <Typography variant={'h1'} children={t('verifyIdentity')} />
                        <CardContainer numCards={(providers?.allowed?.length || 1) as number}>
                            {providers?.allowed?.map(type => (
                                <AuthCard title={type} info={type} infoUser={type} type={type} />
                            ))}
                        </CardContainer>
                    </AuthContainer>
                </Fade>
            )}
        </>
    );
}
