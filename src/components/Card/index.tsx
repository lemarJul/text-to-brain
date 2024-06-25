import {
  Card,
  CardProps,
  CardActions,
  CardContent,
  Divider,
} from "@mui/material";
import EditArea from "./EditArea";
import PracticeArea from "./PracticeArea";
import SettingsControls from "./SettingsControls";
import { useAppContext } from "../../utils/context";
import { CARD_MODES } from "../../utils/context";

export default function TtbCard(props: Readonly<CardProps>) {
  const { cardMode } = useAppContext();
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "1em",
      padding: "2em",
      border: "1px solid #ccc",
      width: "100%",
      transition: "height 0.3s ease",
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };

  return (
    <Card {...props} sx={styles.card}>
      <CardActions sx={styles.cardActions}>
        <SettingsControls />
      </CardActions>
      <Divider />

      <CardContent>
        {cardMode === CARD_MODES.EDIT ? <EditArea /> : <PracticeArea />}
      </CardContent>
    </Card>
  );
}
