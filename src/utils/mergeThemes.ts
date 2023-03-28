import { createTheme } from '@mui/material/styles';
import { defaultTheme } from '../themes';

export const mergeThemes = ({ newTheme }: { newTheme: typeof defaultTheme }) => {
    const theme = createTheme(defaultTheme, newTheme);
    return theme;
};
