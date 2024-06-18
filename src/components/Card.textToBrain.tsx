import { Card, CardActions, CardContent, Divider } from "@mui/material";
import EditArea from "./EditArea";
import PracticeArea from "./PracticeArea";
import SettingsControls from "./buttons/SettingsControls";
import { useAppContext } from "../utils/context";

export default function TtbCard() {
  const { editMode } = useAppContext();

  return (
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
  );
}
