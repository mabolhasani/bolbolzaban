import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import '../../resources/fonts.css';

const primaryFontFamily = '"Samim", "Tahoma", "Helvetica", "Arial", sans-serif';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: primaryFontFamily,
  },
  palette: {
    primary: {
      main: '#615136',
      alternative: '#FF6D00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#fff',
      alternative: '#82B1FF',
      contrastText: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;