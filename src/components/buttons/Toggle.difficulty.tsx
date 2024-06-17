import { useAppContext } from "../../utils/context";
// Material UI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
//usetheme

export default function DifficultyToggleButtons() {
  const { setDifficulty, difficulty } = useAppContext();

  const buttons = [
    {
      value: 0,
      title: "View raw text",
      icon: <VisibilityIcon />,
    },
    {
      value: 1,
      title: "show first word's letter",
      icon: <LooksOneIcon />,
    },
    {
      value: 2,
      title: "show first sentence's letter",
      icon: <LooksTwoIcon />,
    },
    {
      value: 3,
      title: "show first paragraph's letter",
      icon: <LooksThreeIcon />,
    },
  ];

  return (
    <ToggleButtonGroup
      value={difficulty}
      exclusive
      onChange={(_event, newDifficulty) =>
        newDifficulty !== null && setDifficulty(newDifficulty)
      }
      aria-label="text alignment"
    >
      {buttons.map((button) => (
        <ToggleButton
          key={button.value}
          value={button.value}
          selected={button.value === difficulty}
          title={button.title}
          aria-label={button.title}
        >
          {button.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
