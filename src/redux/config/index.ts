import { Config, initialState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {},
});

// export const { setConfig } = configSlice.actions;
export const configReducer = configSlice.reducer;
