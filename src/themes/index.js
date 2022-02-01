import { createTheme } from '@material-ui/core/styles'
import typography from './typography'

const theme = createTheme({
  palette: {
    primary: {
      main: '#101F40',
    },
    secondary: {
      main: '#FDB44B',
    },
    tertiary: {
      main: '#00BBF0',
      dark: '#036480',
    },
    success: {
      main: '#4BB543',
    },
    error: {
      main: '#B33A3A',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
      divider: '#888888',
      link: '#E13766',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F0F0F5',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: typography,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 32,
      },
    },
  },
})

export default theme
