import { AuthCard } from '.';
import { Meta, StoryObj } from '@storybook/react';

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
            <div style={{ margin: '5em' }}>
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
        title: 'Primary',
    },
    render: args => (
        <div>
            <AuthCard {...args} />
        </div>
    ),
};
