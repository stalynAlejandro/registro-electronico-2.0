/// <reference types="vite/client" />

export type ThemeType = 'lightTheme' | 'darkTheme' | 'dimedTheme' | 'darkDimedTheme';

export type LanguajesType = 'es' | 'en' | 'ca' | 'gl';

export interface IConfig {
    apiUrl: string;
    publishedLangs: LanguajesType[];
    flags: {
        AuthMethodsSameSize: boolean;
    };
    theme: any;
}

export interface IProviders {
    id: string;
    loa: number;
    title: string;
    allowed: string[];
    description: string;
}
