import "./App.css";
import { useAppContext } from "./utils/context.tsx";
//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
// Custom Components
import EditArea from "./components/EditArea.tsx";
import SettingsControls from "./components/SettingsControls.tsx";
import PracticeArea from "./components/PracticeArea.tsx";

function App() {
  const { editMode } = useAppContext();

  return (
    <>
      <Typography variant="h1" component="div">
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
    </>
  );
}

export default App;
