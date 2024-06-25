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
    { value: -1, title: "Hide text", icon: <EditIcon /> },
    { value: 0, title: "View raw text", icon: <VisibilityIcon /> },
    { value: 1, title: "Show first word's letter", icon: <LooksOneIcon /> },
    { value: 2, title: "Show first sentence's letter", icon: <LooksTwoIcon /> },
    {
      value: 3,
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
