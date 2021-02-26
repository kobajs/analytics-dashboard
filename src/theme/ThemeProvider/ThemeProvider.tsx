import { FC } from 'react';
import { CssBaseline, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { defaultTheme } from '../defaultTheme/defaultTheme';

export type ThemeProviderProps = {
  theme?: Partial<ThemeOptions>;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
