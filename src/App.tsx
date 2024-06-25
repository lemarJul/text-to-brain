// Styles - Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Styles - Theme
import theme from "./utils/theme";
// Styles - Components
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
// Stylesheet
import "./App.css";
// Context
import { AppContextProvider, useAppContext } from "./utils/context";
// Components
import { Container, Collapse } from "@mui/material";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </ThemeProvider>
  );
}

function Main() {
  const { showAbout } = useAppContext();

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "4rem",
    padding: "1rem",
    width: "100%",
    transition: "height 0.3s ease",
  };

  return (
    <Container sx={style}>
      <Header />
      <main>
        <Collapse in={showAbout}>
          <About />
        </Collapse>
        <Collapse in={!showAbout}>
          <Card />
        </Collapse>
      </main>
      <Footer />
    </Container>
  );
}
