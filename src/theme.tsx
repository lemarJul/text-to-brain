import { createTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue.A100,
      dark: colors.blue.A400,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
  },
  components: {
    // Use this key to inject global styles
    MuiCssBaseline: {
      styleOverrides: `
        button:focus {
          outline: none;
        }
      `,
    },
  },
});

export default theme;
