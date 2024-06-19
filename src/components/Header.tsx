import { Typography, Box } from "@mui/material";
import InfoButton from "./buttons/Button.info";
import { useAppContext } from "../utils/context";

export default function Header() {
  const { setShowAbout } = useAppContext();
  const ToggleAbout = () => setShowAbout((prev) => !prev);
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        button: {
          position: "absolute",
          top: "1rem",
        },
      }}
    >
      <Typography variant="h1" component="h1" display={"inline"}>
        Text to Brain
      </Typography>
      <InfoButton onClick={ToggleAbout} />
    </Box>
  );
}
