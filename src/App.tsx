//Material UI Components
import { Container } from "@mui/material";
// Custom Components
import Header from "./components/Header";
import Card from "./components/Card.textToBrain";
import Footer from "./components/Footer";
// Styles
import "./App.css";

function App() {
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
        <Card />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
