import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Theme = 'lightTheme' | 'darkTheme' | 'dimedTheme' | 'darkDimedTheme';

interface ThemeProps {
    theme: Theme;
}

const initialState: ThemeProps = {
    theme: 'lightTheme',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
