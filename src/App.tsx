import "./App.css";
import { useAppContext } from "./utils/context.tsx";
//Material UI

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
// Custom Components
import EditArea from "./components/EditArea.tsx";
import SettingsControls from "./components/SettingsControls.tsx";
import PracticeArea from "./components/PracticeArea.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const { editMode } = useAppContext();

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
        }}
      >
        <Typography variant="h1" component="div" >
          Text to Brain
        </Typography>
        <Card
          sx={{
            p: "1rem",
          }}
        >
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <SettingsControls />
          </CardActions>
          <Divider />

          <CardContent>
            {editMode ? (
              <EditArea className="card__input" />
            ) : (
              <PracticeArea className="card__output" />
            )}
          </CardContent>
        </Card>
        <Footer />
      </Container>
    </>
  );
}

export default App;
