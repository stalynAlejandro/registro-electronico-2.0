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
        color: 'rgb(255, 206, 0)',
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

export const AuthContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 60,
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
        gridTemplateColumns: `repeat(${numCards >= 4 ? 4 : numCards}, 1fr)`,
        '& > div:nth-child(1)': {
            gridColumn: `${numCards > 4 ? '1 / 3' : 'auto'} `,
        },
        '& > div:nth-child(2)': {
            gridColumn: `${numCards > 4 ? '3 / 5' : 'auto'} `,
        },
        '& > div:nth-child(3)': {
            gridColumn: `${numCards > 4 ? '5 / 7' : 'auto'} `,
        },
        '& > div:nth-child(4)': {
            gridColumn: `${numCards > 4 ? '2 / 4' : 'auto'} `,
        },
        '& > div:nth-child(5)': {
            gridColumn: `${numCards > 4 ? '4 / 6' : 'auto'} `,
        },
        [theme.breakpoints.down('xl')]: {
            gridTemplateColumns: `repeat(${numCards >= 3 ? 2 : numCards}, 1fr)`,
            '& > div:nth-child(1)': {
                gridColumn: 'auto',
            },
            '& > div:nth-child(2)': {
                gridColumn: 'auto',
            },
            '& > div:nth-child(3)': {
                gridColumn: 'auto',
            },
            '& > div:nth-child(4)': {
                gridColumn: 'auto',
            },
            '& > div:nth-child(5)': {
                gridColumn: 'auto',
            },
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: `repeat(${numCards > 1 ? 1 : numCards}, 1fr)`,
        },
        [theme.breakpoints.down('sm')]: {
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

export const FooterText = styled('p')(({ theme }) => ({
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace',
    '& a': {
        color: theme.palette.text.secondary,
        textDecoration: 'underline',
    },
}));
