import { IConfig } from '../../vite-env';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IConfig = {
    apiUrl: '',
    apiUrlDev: '',
    defaultLang: 'ca',
    publishedLangs: [],
    clientInfo: '',
    social: {
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
    },
    links: {
        legal: '',
        privacy: '',
        catalog: '',
        home: '',
        web: '',
    },
    drafts: {
        active: false,
        autosave: false,
        maxDrafts: 0,
        expirationDays: 0,
        beforeDaysWarning: 0,
    },
    representation: {
        allowBdtRepresent: false,
        allowFreeRepresent: false,
        accreditationDoc: {
            docType: '',
            signature: false,
            required: false,
            multiple: false,
            maxsize: 0,
            accepts: [],
        },
        mandateDoc: {
            docType: '',
            signature: false,
            required: false,
            multiple: false,
            maxsize: 0,
            accepts: [],
        },
        allowAOC: false,
        allowREA: false,
    },
    flags: {
        artwork: false,
        AuthMethodsSameSize: false,
        useDefaultProvince: false,
        analyticsRecord: false,
        analyticsRecordRealEnvironment: false,
    },
    develop: {
        fakeAutofirma: false,
        fakeMobileAutofirma: false,
        stopBeforeAutoFirma: false,
        verifySet: {
            KO: ['J62671540'],
            error: ['N7766983F'],
        },
    },
    developRelease: {
        fakeAutofirma: false,
        fakeMobileAutofirma: false,
        stopBeforeAutoFirma: false,
        verifySet: {
            KO: [''],
            error: [''],
        },
    },
    privacy: {
        holder: '',
        grounds: [],
        disclosure: '',
        transfers: false,
        rights: [],
    },
    theme: undefined,
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig(state, action: PayloadAction<IConfig>) {
            state.apiUrl = action.payload.apiUrl;
            state.apiUrlDev = action.payload.apiUrlDev;
            state.defaultLang = action.payload.defaultLang;
            state.publishedLangs = action.payload.publishedLangs;
            state.clientInfo = action.payload.clientInfo;
            state.social = action.payload.social;
            state.links = action.payload.links;
            state.drafts = action.payload.drafts;
            state.representation = action.payload.representation;
            state.flags = action.payload.flags;
            state.develop = action.payload.develop;
            state.developRelease = action.payload.developRelease;
            state.privacy = action.payload.privacy;
            state.theme = action.payload.theme;
        },
    },
});

export const { setConfig } = configSlice.actions;
export const configReducer = configSlice.reducer;
