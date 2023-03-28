import { ConfigProps } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ConfigProps = {
    apiUrl: '',
    publishedLangs: [],
    flags: {
        AuthMethodsSameSize: false,
    },
    theme: {
        palette: {
            primary: {
                main: '',
            },
            secondary: {
                main: '',
            },
        },
        branding: {
            logo: {
                wide: '',
                square: '',
            },
        },
    },
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig(state, action: PayloadAction<ConfigProps>) {
            state = action.payload;
        },
    },
});

export const { setConfig } = configSlice.actions;
export const configReducer = configSlice.reducer;
