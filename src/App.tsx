//Material UI Components
import { Container, Collapse } from "@mui/material";
// Custom Components
import Header from "./components/Header";
import Card from "./components/Card.textToBrain";
import Footer from "./components/Footer";
import About from "./components/About";
// Styles
import "./App.css";
import { useAppContext } from "./utils/context";

function App() {
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

export default App;
