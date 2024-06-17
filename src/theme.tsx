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
});

export default theme;
