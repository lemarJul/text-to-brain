import React from "react";
import { useAppContext } from "../../utils/context";
// Material UI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";

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

  const style = {
    "> button": {
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        borderColor: "transparent",
      },
      "&.Mui-selected": {
        borderColor: "transparent",
        // backgroundColor: "lightblue !important", // Change this to the color you want
      },
    },
  };
  return (
    <ToggleButtonGroup
      value={difficulty}
      exclusive
      onChange={(event, newDifficulty) =>
        newDifficulty !== null && setDifficulty(newDifficulty)
      }
      aria-label="text alignment"
      sx={style}
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
