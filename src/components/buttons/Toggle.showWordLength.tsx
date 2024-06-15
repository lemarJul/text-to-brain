import { ToggleButton } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import { useAppContext } from "../../utils/context";

function ShowWordLength() {
  const { showWordLength, setShowWordLength } = useAppContext();

  return (
    <ToggleButton
      value="check"
      selected={showWordLength}
      onChange={() => setShowWordLength(!showWordLength)}
      className={"card__settings__button"}
      text-area="Show/Hidde words length"
      title="Show/Hidde words length"
    >
      <StraightenIcon />
    </ToggleButton>
  );
}

export default ShowWordLength;
