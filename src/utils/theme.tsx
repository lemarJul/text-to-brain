import { createTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

// A custom theme for this app

// First create a themeOptions object to allow access to its properties in styleOverrides below.
const theme = {
  palette: {
    primary: {
      main: colors.indigo.A100,
      dark: colors.indigo.A700,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
  },
};

export default createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        button:focus {
          outline: none;
        }
      `,
    },
    MuiCollapse: {
      defaultProps: {
        timeout: 500,
        easing: { enter: "easeOut", exit: "easeIn" },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
          "&[aria-pressed='true']": {
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  },
});
