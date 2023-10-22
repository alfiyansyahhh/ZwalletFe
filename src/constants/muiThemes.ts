import { createTheme } from '@mui/material';

export const colorTheme = createTheme({
  palette: {
    primary: { main: '#6379F4', contrastText: '#FFF' },
    success: { main: '#21AF7D', contrastText: '#fff' },
    warning: { main: '#EE4E2B', contrastText: '#fff' },
    secondary: { main: '#fff', contrastText: '#6379F4' },
  },
});

export const btnTheme = createTheme({
  ...colorTheme,
  typography: {
    // fontFamily: '',
    allVariants: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      // styleOverrides: { outlined: { border: '2px solid' } },
    },
  },
});
