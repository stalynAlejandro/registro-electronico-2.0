import { useLocation } from 'react-router-dom';
import { AuthContainer } from './styled';
import { useTranslation } from 'react-i18next';
import { Fade, Typography } from '@mui/material';

export function Auth() {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <Fade in={true} timeout={1000}>
            <AuthContainer maxWidth="xl">
                <Typography variant={'h1'} children={t('verifyIdentity')} />
            </AuthContainer>
        </Fade>
    );
}
