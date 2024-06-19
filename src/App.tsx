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
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Header />

      <main>
        <Collapse
          in={showAbout}
          timeout={500}
          easing={{ enter: "easeOut", exit: "easeIn" }}
        >
          <About />
        </Collapse>
        <Collapse
          in={!showAbout}
          timeout={500}
          easing={{ enter: "easeOut", exit: "easeIn" }}
        >
          <Card />
        </Collapse>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
