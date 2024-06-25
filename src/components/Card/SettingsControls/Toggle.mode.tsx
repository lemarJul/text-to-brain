import { useAppContext, AppContextType } from "../../../utils/context";
// Material UI
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
import { CARD_MODES } from "../../../utils/context";

// Define a type for the mode options to improve type safety
type ModeOptions = {
  value: AppContextType["cardMode"];
  title: string;
  icon: JSX.Element;
};

export default function ModeToggleButtons(
  props: Readonly<ToggleButtonGroupProps>
) {
  const { setCardMode: setMode, cardMode: mode } = useAppContext();

  const modeOptions: ModeOptions[] = [
    { value: CARD_MODES.EDIT, title: "Hide text", icon: <EditIcon /> },
    {
      value: CARD_MODES.NONE,
      title: "View raw text",
      icon: <VisibilityIcon />,
    },
    {
      value: CARD_MODES.WORD,
      title: "Show first word's letter",
      icon: <LooksOneIcon />,
    },
    {
      value: CARD_MODES.SENTENCE,
      title: "Show first sentence's letter",
      icon: <LooksTwoIcon />,
    },
    {
      value: CARD_MODES.PARAGRAPH,
      title: "Show first paragraph's letter",
      icon: <LooksThreeIcon />,
    },
  ];

  return (
    <ToggleButtonGroup
      {...props}
      value={mode}
      exclusive
      onChange={(_event, newMode) => newMode !== null && setMode(newMode)}
      aria-label="text alignment"
    >
      {modeOptions.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          selected={option.value === mode}
          title={option.title}
          aria-label={option.title}
        >
          {option.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
