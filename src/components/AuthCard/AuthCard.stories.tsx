import { store } from '../../redux';
import { Provider } from 'react-redux';
import { AuthCard } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

import { ReactComponent as certificateSvg } from '../../pages/Auth/authLogos/certificate.svg';
import { ReactComponent as AOCSvg } from '../../pages/Auth/authLogos/AOC.svg';
import { ReactComponent as GobiernoDeEspañaSvg } from '../../pages/Auth/authLogos/Gobierno-de-España.svg';
import { ReactComponent as identityCardSvg } from '../../pages/Auth/authLogos/identity-card.svg';
import { ReactComponent as digitalCertificateSvg } from '../../pages/Auth/authLogos/digital-certificate.svg';
import { ReactComponent as deviceTokenSvg } from '../../pages/Auth/authLogos/device-token.svg';
import { ReactComponent as devicePasswordTokenSvg } from '../../pages/Auth/authLogos/device-password-token.svg';
import { ReactComponent as IzenpeSvg } from '../../pages/Auth/authLogos/Izenpe.svg';
import { ReactComponent as unknown2Svg } from '../../pages/Auth/authLogos/unknown2.svg';

const meta: Meta<typeof AuthCard> = {
    title: 'Components/AuthCard',
    component: AuthCard,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            values: [
                { name: 'dark', value: '#000000' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    decorators: [
        Story => (
            <div>
                <Story />
            </div>
        ),
    ],
    argTypes: {},
};

export default meta;

export const CertificadoClave: StoryObj<typeof AuthCard> = {
    args: {
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
        Logo: GobiernoDeEspañaSvg,
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};

export const Valid: StoryObj<typeof AuthCard> = {
    args: {
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
        Logo: AOCSvg,
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};

export const Giltza: StoryObj<typeof AuthCard> = {
    args: {
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
        Logo: IzenpeSvg,
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};

export const DigitalCertificate: StoryObj<typeof AuthCard> = {
    args: {
        type: 'digital-certificate',
        category: 'internal',
        title: 'CertificadoDigital',
        description: 'IdentificacionMedianteCertificadoDigitalNavegador',
        help: 'DeberaEstarDebidamenteInstaladoNavegador',
        path: 'CERT',
        color: '#DDD',
        Logo: certificateSvg,
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};

export const NoAuth: StoryObj<typeof AuthCard> = {
    args: {
        type: 'unverified',
        category: 'internal',
        title: 'SinAutenticacion',
        description: 'ContinuarSinValidarSuIdentidad',
        help: 'DeberaIntroducirManualmenteSusDatosPersonales',
        path: 'UNVERIFIED',
        color: '#DDD',
        Logo: unknown2Svg,
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};
