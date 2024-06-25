import ModeToggle from "./Toggle.mode.tsx";
import DifficultyToggle from "./Toggle.difficulty.tsx";
import ShowWordLengthToggle from "./Toggle.showWordLength.tsx";
import { Box, BoxProps } from "@mui/material";

export default function SettingsControls(props: Readonly<BoxProps>) {

  const style = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "1em",
  };

  return (
    <Box {...props} sx={style}>
      <ModeToggle />
      <DifficultyToggle />
      <ShowWordLengthToggle />
    </Box>
  );
}
