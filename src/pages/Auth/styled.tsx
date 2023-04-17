import { styled } from '@mui/material';
import { Container } from '@mui/system';

import { ReactComponent as AOCSvg } from './authLogos/AOC.svg';
import { ReactComponent as IzenpeSvg } from './authLogos/Izenpe.svg';
import { ReactComponent as unknown2Svg } from './authLogos/unknown2.svg';
import { ReactComponent as deviceTokenSvg } from './authLogos/device-token.svg';
import { ReactComponent as certificateSvg } from './authLogos/certificate.svg';
import { ReactComponent as identityCardSvg } from './authLogos/identity-card.svg';
import { ReactComponent as GobiernoDeEspañaSvg } from './authLogos/Gobierno-de-España.svg';
import { ReactComponent as digitalCertificateSvg } from './authLogos/digital-certificate.svg';
import { ReactComponent as devicePasswordTokenSvg } from './authLogos/device-password-token.svg';

export const AuthDefinitions = [
    {
        type: 'clave',
        category: 'external',
        title: 'Clave',
        description: 'IdentificacionATravesPlataformaClave',
        help: 'PermiteIdentificacionPorCualquieraMetodos',
        methods: [
            { label: 'DNIElectronico', Icon: identityCardSvg },
            { label: 'CertificadoDigital', Icon: digitalCertificateSvg },
            { label: 'ClavePIN', Icon: deviceTokenSvg },
            { label: 'ClavePermanente', Icon: devicePasswordTokenSvg },
        ],
        path: 'CLAVE',
        color: '#ffdd00',
        logo: GobiernoDeEspañaSvg,
    },
    {
        type: 'valid',
        category: 'external',
        title: 'Valid',
        description: 'IdentificacionATravesPlataformaValid',
        help: 'PermiteIdentificacionPorCualquieraMetodos',
        methods: [
            { label: 'DNIElectronico', Icon: identityCardSvg },
            { label: 'CertificadoDigital', Icon: digitalCertificateSvg },
            { label: 'idCATMobil', Icon: deviceTokenSvg },
        ],
        path: 'VALID',
        color: '#f97b65',
        logo: AOCSvg,
    },
    {
        type: 'giltza',
        category: 'external',
        title: 'Giltza',
        description: 'IdentificacionATravesPlataformaGiltza',
        help: 'PermiteIdentificacionPorCualquieraMetodos',
        methods: [
            { label: 'DNIElectronico', Icon: identityCardSvg },
            { label: 'CertificadoDigital', Icon: digitalCertificateSvg },
            { label: 'Bak', Icon: deviceTokenSvg },
            { label: 'BakQ', Icon: devicePasswordTokenSvg },
        ],
        path: 'GILTZA',
        color: '#00537f',
        logo: IzenpeSvg,
    },
    {
        type: 'digital-certificate',
        category: 'internal',
        title: 'CertificadoDigital',
        description: 'IdentificacionMedianteCertificadoDigitalNavegador',
        help: 'DeberaEstarDebidamenteInstaladoNavegador',
        path: 'CERT',
        color: '#DDD',
        logo: certificateSvg,
    },
    {
        type: 'unverified',
        category: 'internal',
        title: 'SinAutenticacion',
        description: 'ContinuarSinValidarSuIdentidad',
        help: 'DeberaIntroducirManualmenteSusDatosPersonales',
        path: 'UNVERIFIED',
        color: '#DDD',
        logo: unknown2Svg,
    },
];

export const AuthContainer = styled(Container)(({ theme }) => ({
    width: '80%',
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 60,
    [theme.breakpoints.down('md')]: {
        padding: 0,
    },
}));

export const AuthTitle = styled('h1')(({ theme }) => ({
    width: '80%',
    fontSize: 50,
}));

export const CardContainer = styled('div')(
    ({ theme, numCards }: { theme?: any; numCards: number }) => ({
        gridGap: 20,
        paddingTop: 50,
        paddingBottom: 70,
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        gridTemplateColumns: `repeat(${numCards >= 3 ? 3 : numCards}, 1fr)`,
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: `repeat(${numCards >= 3 ? 2 : numCards}, 1fr)`,
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: `repeat(${numCards > 2 ? 1 : numCards}, 1fr)`,
        },
        [theme.breakpoints.down('sm')]: {
            padding: 0,
            gridTemplateColumns: `repeat(1, 1fr)`,
        },
    })
);

export const FooterContainer = styled('div')(({ theme }) => ({
    minHeight: 180,
    width: '50%',
    display: 'flex',
    marginTop: 'auto',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    },
}));
