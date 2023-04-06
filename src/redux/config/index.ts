import { IConfig } from '../../vite-env';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IConfig = {
    apiUrl: '',
    publishedLangs: [],
    flags: {
        AuthMethodsSameSize: false,
    },
    theme: undefined,
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig(state, action: PayloadAction<IConfig>) {
            state.flags = action.payload.flags;
            state.apiUrl = action.payload.apiUrl;
            state.publishedLangs = action.payload.publishedLangs;
        },
    },
});

export const { setConfig } = configSlice.actions;
export const configReducer = configSlice.reducer;
