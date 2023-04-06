import { useLocation } from 'react-router-dom';
import { AuthContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';

export function Auth() {
    const { state = '' } = useLocation();
    const { t } = useTranslation();

    const [providers, loading, error] = useFetchProviders('dev');

    console.log({ providers });

    return (
        <Fade in={true} timeout={1000}>
            <AuthContainer maxWidth="xl">
                <Typography variant={'h1'} children={t('verifyIdentity')} />
                {state === 'all' && <Typography variant={'h2'} children={t('allProviders')} />}
                {state === 'triple' && <Typography variant={'h2'} children={t('allProviders')} />}
                {state === 'single' && <Typography variant={'h2'} children={t('allProviders')} />}
                {state === 'noauth' && <Typography variant={'h2'} children={t('allProviders')} />}
            </AuthContainer>
        </Fade>
    );
}
