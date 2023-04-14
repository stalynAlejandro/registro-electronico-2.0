import { store } from '../../redux';
import { Provider } from 'react-redux';
import { LngSelector } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { MuiThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta<typeof LngSelector> = {
    title: 'Components/LngSelector',
    component: LngSelector,
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

export const Primary: StoryObj<typeof LngSelector> = {
    args: {
        currentLng: 'Español',
        listLng: [
            { label: 'Español', value: 'es' },
            { label: 'English', value: 'en' },
        ],
        changeLng: () => console.log('Change language'),
    },
    render: args => (
        <Provider store={store}>
            <MuiThemeProvider configTheme={undefined}>
                <LngSelector {...args} />
            </MuiThemeProvider>
        </Provider>
    ),
};
