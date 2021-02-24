import { FC } from 'react';
import { ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { defaultTheme } from '../defaultTheme/defaultTheme';

export type ThemeProviderProps = {
  theme?: ThemeOptions;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
