import { ToggleButton, ToggleButtonProps } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import { useAppContext } from "../../../utils/context";

type ShowWordLengthProps = Readonly<Omit<ToggleButtonProps, "value">>;

function ShowWordLength(props: Readonly<ShowWordLengthProps>) {
  const { showWordLength, setShowWordLength } = useAppContext();

  return (
    <ToggleButton
      {...props}
      value="check"
      selected={showWordLength}
      onChange={() => setShowWordLength(!showWordLength)}
      className={"card__settings__button"}
      text-area="Show/Hide words length"
      title="Show/Hide words length"
    >
      <StraightenIcon />
    </ToggleButton>
  );
}

export default ShowWordLength;
