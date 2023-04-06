import { ThemeType } from '../../vite-env';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ThemeProps {
    theme: ThemeType;
}

const initialState: ThemeProps = {
    theme: 'lightTheme',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<ThemeType>) {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
