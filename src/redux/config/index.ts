import { ConfigProps } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ConfigProps = {
    apiUrl: '',
    publishedLangs: [],
    flags: {
        AuthMethodsSameSize: false,
    },
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig(state, action: PayloadAction<ConfigProps>) {
            state.flags = action.payload.flags;
            state.apiUrl = action.payload.apiUrl;
            state.publishedLangs = action.payload.publishedLangs;
        },
    },
});

export const { setConfig } = configSlice.actions;
export const configReducer = configSlice.reducer;
