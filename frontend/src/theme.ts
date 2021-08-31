import { createTheme } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { green, red } from '@material-ui/core/colors';

const palette: PaletteOptions = {
  primary: {
    main: '#79aec8',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#4db5ab',
    dark: '#055a52',
    contrastText: '#ffffff',
  },
  background: {
    default: '#fafafa',
  },
  success: {
    main: green['500'],
    contrastText: '#ffffff',
  },
  error: {
    main: red['500'],
    contrastText: '#ffffff',
  },
};

const theme = createTheme({
  palette,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root, #root > div': {
          height: '100%',
        },
      },
    },
  },
});

export default theme;
