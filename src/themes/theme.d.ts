import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    export interface CustomTheme extends Theme {
        status: {
            danger: string;
        };
    }
    export interface CustomThemeOptions extends ThemeOptions {
        status?: {
            danger?: string;
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
