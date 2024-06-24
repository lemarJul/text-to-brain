// Styles - Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Styles - Theme
import theme from "./theme";
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
import Card from "./components/Card.textToBrain";
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
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem",
    },
    collapseAnimation: {
      timeout: 500,
      easing: { enter: "easeOut", exit: "easeIn" },
    },
  };

  return (
    <Container sx={styles.container}>
      <Header />
      <main>
        <Collapse in={showAbout} {...styles.collapseAnimation}>
          <About />
        </Collapse>
        <Collapse in={!showAbout} {...styles.collapseAnimation}>
          <Card />
        </Collapse>
      </main>
      <Footer />
    </Container>
  );
}
