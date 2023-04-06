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
    allowed: string[];
    id: string;
    title: string;
    description: string;
    loa: number;
}
