import { store } from '../../redux';
import { Header } from './index';
import { Provider } from 'react-redux';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
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

export const Default: StoryObj<typeof Header> = {
    args: {},
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <Header />
            </MuiThemeProvider>
        </Provider>
    ),
};
