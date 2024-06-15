import ModeToggle from "./buttons/Toggle.mode.tsx";
import DifficultyToggle from "./buttons/Toggle.difficulty.tsx";
import ShowWordLengthToggle from "./buttons/Toggle.showWordLength.tsx";

export default function SettingsControls() {
  return (
    <>
      <span className="card__settings"
      >
        <ModeToggle   />
        <DifficultyToggle />
        <ShowWordLengthToggle />
      </span>
    </>
  );
}
