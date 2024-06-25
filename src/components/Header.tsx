import { Typography, Box, BoxProps } from "@mui/material";
import InfoButton from "./buttons/Button.info";
import { useAppContext } from "../utils/context";

export default function Header(props: Readonly<BoxProps>) {
  const { setShowAbout } = useAppContext();
  const ToggleAbout = () => setShowAbout((prev) => !prev);

  const style = {
    position: "relative",
    button: {
      position: "absolute",
      top: "1rem",
    },
  };

  return (
    <Box {...props} component="header" sx={style}>
      <Typography variant="h1" component="h1" display={"inline"}>
        Text to Brain
      </Typography>
      <InfoButton onClick={ToggleAbout} />
    </Box>
  );
}
