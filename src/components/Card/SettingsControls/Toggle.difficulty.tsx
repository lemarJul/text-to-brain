import { useAppContext, AppContextType } from "../../../utils/context";
// Material UI
import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
//usetheme

// Define a type for the difficulty options to improve type safety
type DifficultyOption = {
  value: AppContextType["difficulty"];
  title: string;
  icon: JSX.Element;
};

export default function DifficultyToggleButtons(
  props: Readonly<ToggleButtonGroupProps>
) {
  const { setDifficulty, difficulty } = useAppContext();

  const difficultyOptions: DifficultyOption[] = [
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
      value={difficulty}
      exclusive
      onChange={(_event, newDifficulty) =>
        newDifficulty !== null && setDifficulty(newDifficulty)
      }
      aria-label="text alignment"
    >
      {difficultyOptions.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          selected={option.value === difficulty}
          title={option.title}
          aria-label={option.title}
        >
          {option.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
