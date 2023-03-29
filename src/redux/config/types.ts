export type languajges = 'es' | 'en' | 'ca' | 'gl';

export interface ConfigProps {
    apiUrl: string;
    publishedLangs: languajges[];
    flags: {
        AuthMethodsSameSize: boolean;
    };
}
