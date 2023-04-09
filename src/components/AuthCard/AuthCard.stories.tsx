import { store } from '../../redux';
import { Provider } from 'react-redux';
import { AuthCard } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

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
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

export const Clave: StoryObj<typeof AuthCard> = {
    args: {
        title: 'Cl@ve',
        info: 'Identificación a través de la plataforma Cl@ve del Gobierno de España.',
        infoUser:
            'Permite la identifiación por cualquiera de los métodos soportados por la plataforma (algunos métodos requieren registro previo).',
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};

export const Certificado: StoryObj<typeof AuthCard> = {
    args: {
        title: 'Cerficado Digital',
        info: 'Identificación mediante cerficado digital a través de su navegador web. ',
        infoUser:
            'Deberá estar debidamente instalado en su navegador (en caso de certificados software) o disponer de los drivers necesarios (en caso de certificados hardware).',
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};
