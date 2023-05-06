import { store } from '../../redux';
import { Footer } from './index';
import { Provider } from 'react-redux';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
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

export const Default: StoryObj<typeof Footer> = {
    args: {},
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <Footer />
            </MuiThemeProvider>
        </Provider>
    ),
};
