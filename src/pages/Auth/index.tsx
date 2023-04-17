import { Fade } from '@mui/material';
import { Loading } from '../Loading';
import { AuthCard } from '../../components/AuthCard';
import { LngSelector } from '../../components/LngSelector';
import { useTranslation } from 'react-i18next';
import { ButtonsLangProps } from '../Welcome/styled';
import { useFetchProviders } from '../../hooks/useFetchProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    AuthContainer,
    AuthDefinitions,
    AuthTitle,
    CardContainer,
    FooterContainer,
} from './styled';

export function Auth() {
    let navigate = useNavigate();
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
                    <AuthContainer>
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
                                    // <div className={`authCard-${type}`}>
                                    <AuthCard
                                        key={index}
                                        type={type}
                                        title={t(title, { ns: 'auth' }) || ''}
                                        category={category}
                                        description={t(description, { ns: 'auth' }) || ''}
                                        help={t(help, { ns: 'auth' }) || ''}
                                        methods={methods?.map(({ label, Icon }) => ({
                                            label: t(label, { ns: 'auth' }),
                                            Icon,
                                        }))}
                                        color={color}
                                        Logo={logo}
                                        onClick={() => navigate('/credentials', { state: type })}
                                    />
                                    // </div>
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
