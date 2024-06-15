import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useAppContext } from "../../utils/context";

function ModeToggle() {
  const { editMode, setEditMode } = useAppContext();

  return (
    <ToggleButtonGroup 
      exclusive
      value={editMode}
      onChange={(_event, newEditMode) => {
        console.log("newEditMode", newEditMode);
        if (newEditMode !== null) {
          setEditMode(newEditMode);
        }
      }}
    >
      <ToggleButton value={true} aria-label="Edit mode" title="Edit mode" >
        <EditIcon />
      </ToggleButton>
      <ToggleButton
        value={false}
        aria-label="Learning mode"
        title="Learning mode"
      >
        <RecordVoiceOverIcon />
      </ToggleButton>
    </ToggleButtonGroup>

    // <ToggleChildrenButton
    //   className={"card__settings__button"}
    //   title="Toggle mode"
    //   {...props}
    //   childrenState1={<EditIcon />}
    //   childrenState2={<RecordVoiceOverIcon />}
    // />
  );
}

export default ModeToggle;
