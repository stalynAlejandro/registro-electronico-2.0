import { defaultTheme } from '../themes';
import { createTheme } from '@mui/material/styles';

export const mergeThemes = ({ newTheme }: { newTheme: typeof defaultTheme }) => {
    return createTheme(defaultTheme, newTheme);
};