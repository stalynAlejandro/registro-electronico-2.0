import { store } from '../../redux';
import { Provider } from 'react-redux';
import { AuthCard } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

import { ReactComponent as GobiernoDeEspañaSvg } from '../../pages/Auth/authLogos/Gobierno-de-España.svg';
import { ReactComponent as identityCardSvg } from '../../pages/Auth/authLogos/identity-card.svg';
import { ReactComponent as digitalCertificateSvg } from '../../pages/Auth/authLogos/digital-certificate.svg';
import { ReactComponent as deviceTokenSvg } from '../../pages/Auth/authLogos/device-token.svg';
import { ReactComponent as devicePasswordTokenSvg } from '../../pages/Auth/authLogos/device-password-token.svg';

const meta: Meta<typeof AuthCard> = {
    title: 'Components/AuthCard',
    component: AuthCard,
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

export const Certificado: StoryObj<typeof AuthCard> = {
    args: {
        type: 'clave',
        category: 'external',
        title: 'Clave',
        description: 'IdentificacionATravesPlataformaClave',
        help: 'PermiteIdentificacionPorCualquieraMetodos',
        methods: [
            { label: 'DNIElectronico', icon: identityCardSvg },
            { label: 'CertificadoDigital', icon: digitalCertificateSvg },
            { label: 'ClavePIN', icon: deviceTokenSvg },
            { label: 'ClavePermanente', icon: devicePasswordTokenSvg },
        ],
        path: 'CLAVE',
        color: '#ffce00',
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
