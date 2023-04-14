/// <reference types="vite/client" />

export type ThemeType = 'lightTheme' | 'darkTheme' | 'dimedTheme' | 'darkDimedTheme';

export type LanguajesType = 'es' | 'en' | 'ca' | 'gl';

export interface IConfig {
    apiUrl: string;
    apiUrlDev: string;
    defaultLang: string;
    publishedLangs: LanguajesType[];
    clientInfo: string;
    social: {
        facebook: string;
        instagram: string;
        twitter: string;
        youtube: string;
    };
    links: {
        legal: string;
        privacy: string;
        catalog: string;
        home: string;
        web: string;
    };
    drafts: {
        active: boolean;
        autosave: boolean;
        maxDrafts: number;
        expirationDays: number;
        beforeDaysWarning: number;
    };
    representation: {
        allowBdtRepresent: boolean;
        allowFreeRepresent: boolean;
        accreditationDoc: {
            docType: string;
            signature: boolean;
            required: boolean;
            multiple: boolean;
            maxsize: number;
            accepts: [];
        };
        mandateDoc: {
            docType: string;
            signature: boolean;
            required: boolean;
            multiple: boolean;
            maxsize: number;
            accepts: [];
        };
        allowAOC: boolean;
        allowREA: boolean;
    };
    flags: {
        artwork: boolean;
        AuthMethodsSameSize: boolean;
        useDefaultProvince: boolean;
        analyticsRecord: boolean;
        analyticsRecordRealEnvironment: boolean;
    };
    develop: {
        fakeAutofirma: boolean;
        fakeMobileAutofirma: boolean;
        stopBeforeAutoFirma: boolean;
        verifySet: {
            KO: ['J62671540'];
            error: ['N7766983F'];
        };
    };
    developRelease: {
        fakeAutofirma: boolean;
        fakeMobileAutofirma: boolean;
        stopBeforeAutoFirma: boolean;
        verifySet: {
            KO: [''];
            error: [''];
        };
    };
    privacy: {
        holder: string;
        grounds: [];
        disclosure: string;
        transfers: boolean;
        rights: [];
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
