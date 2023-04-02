import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D2137',
    },
    secondary: {
      main: '#FF8E2B',
    },
    info: {
      main: '#2E77AE',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
  },
})
