import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import { AuthContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';

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
                </AuthContainer>
            </Fade>
        </>
    );
}
