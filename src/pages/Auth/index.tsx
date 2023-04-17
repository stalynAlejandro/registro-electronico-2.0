import { Loading } from '../Loading';
import { AuthCard } from '../../components/AuthCard';
import { useLocation } from 'react-router-dom';
import { LngSelector } from '../../components/LngSelector';
import { useTranslation } from 'react-i18next';
import { ButtonsLangProps } from '../Welcome/styled';
import { Fade } from '@mui/material';
import { useFetchProviders } from '../../hooks/useFetchProviders';
import {
    AuthContainer,
    AuthDefinitions,
    AuthTitle,
    CardContainer,
    FooterContainer,
} from './styled';

export function Auth() {
    const { state = '' } = useLocation();
    const { t, i18n } = useTranslation(['common', 'auth']);

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
                        <AuthTitle children={t('verifyIdentity')} />
                        <CardContainer numCards={(providers?.allowed?.length || 1) as number}>
                            {providers?.allowed?.map((type, index) => {
                                const {
                                    category,
                                    title = '',
                                    description = '',
                                    help = '',
                                    methods = [],
                                    color,
                                    logo,
                                } = AuthDefinitions.find(item => item.type === type) || {};
                                return (
                                    <AuthCard
                                        key={index}
                                        type={type}
                                        title={t(title, { ns: 'auth' }) || ''}
                                        category={category}
                                        description={t(description, { ns: 'auth' }) || ''}
                                        help={t(help, { ns: 'auth' }) || ''}
                                        methods={methods}
                                        color={color}
                                        Logo={logo}
                                    />
                                );
                            })}
                        </CardContainer>
                        <FooterContainer>
                            <span>
                                {t('identidadUtilizada', { ns: 'auth' })}
                                <br />
                                <span>{t('opinaParticipa', { ns: 'auth' })}</span>
                            </span>
                            <LngSelector
                                tooltip="Cambiar idioma"
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
