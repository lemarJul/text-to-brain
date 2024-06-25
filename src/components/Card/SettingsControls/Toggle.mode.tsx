import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, {
  ToggleButtonGroupProps,
} from "@mui/material/ToggleButtonGroup";
import EditIcon from "@mui/icons-material/Edit";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useAppContext } from "../../../utils/context";

function ModeToggle({ sx, ...props }: Readonly<ToggleButtonGroupProps>) {
  const { editMode, setEditMode } = useAppContext();

  return (
    <ToggleButtonGroup
      {...props}
      exclusive
      value={editMode}
      onChange={(_event, newEditMode) => {
        console.log("newEditMode", newEditMode);
        if (newEditMode !== null) {
          setEditMode(newEditMode);
        }
      }}
      sx={sx}
    >
      <ToggleButton value={true} aria-label="Edit mode" title="Edit mode">
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
  );
}

export default ModeToggle;
