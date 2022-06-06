import { createTheme } from '@mui/material/styles';

export const theme = {
  primary: '#babcc1',
  secondary: '#262b3d',
};

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#babcc1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#262b3d',
    },
    background: {
      paper: '#181c2c',
    },
  },
  typography: {
    fontSize: 10,
  },
});
