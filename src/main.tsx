// React
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
// Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Styles
import "./index.css";
import theme from "./theme";
// Material UI
import { CssBaseline } from "@mui/material";
// Custom Components
import { AppProvider } from "./utils/context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
