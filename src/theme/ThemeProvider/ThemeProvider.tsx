import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { defaultTheme } from '../defaultTheme/defaultTheme'

export const ThemeProvider = ({ children, theme = defaultTheme }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
)
