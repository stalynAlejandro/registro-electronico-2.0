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

export const Primary: StoryObj<typeof AuthCard> = {
    args: {
        title: 'Cl@ve',
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <AuthCard {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};
