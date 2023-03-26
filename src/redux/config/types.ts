export type languajges = 'es' | 'en' | 'ca' | 'gl';

export interface Config {
    apiUrl: string;
    publishedLangs: languajges[];
    flags: {
        AuthMethodsSameSize: boolean;
    };
    theme: {
        palette: {
            primary: { main: string };
            secondary: { main: string };
        };
        branding: {
            logo: {
                wide: string;
                square: string;
            };
        };
    };
}

export const initialState: Config = {
    apiUrl: '/sta/api/v1',
    publishedLangs: ['es', 'gl', 'en', 'ca'],
    flags: {
        AuthMethodsSameSize: true,
    },
    theme: {
        palette: {
            primary: { main: '#0f62fe' },
            secondary: { main: '#ffb300' },
        },
        branding: {
            logo: {
                wide: 'assets/branding/neutral-logo.svg',
                square: 'assets/branding/neutral-mark.svg',
            },
        },
    },
};
