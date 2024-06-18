import ModeToggle from "./Toggle.mode.tsx";
import DifficultyToggle from "./Toggle.difficulty.tsx";
import ShowWordLengthToggle from "./Toggle.showWordLength.tsx";
import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";

export default function SettingsControls() {
  const theme = useTheme();
  return (
    <Box
      className="card__settings"
      sx={{
        " button": {
          "&:focus": {
            outline: "none",
          },
          "&:hover": {
            borderColor: theme.palette.primary.dark,
          },
          "&[aria-pressed='true']": {
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
          "&.css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected:hover":
            {
              backgroundColor: theme.palette.primary.main,
            },
        },
      }}
    >
      <ModeToggle />
      <DifficultyToggle />
      <ShowWordLengthToggle />
    </Box>
  );
}
