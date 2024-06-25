import Word from "./Word";
import { useAppContext } from "../../utils/context";
import { maskText } from "../../utils/maskText";
import { Box, BoxProps } from "@mui/system";




export default function PracticeArea({
  className,
  ...props
}: Readonly<BoxProps>) {
  const { textContent, showWordLength, cardMode: mode } = useAppContext();
  const maskedText = maskText(textContent, mode, showWordLength);

  const style = {
    fontFamily: "monospace",
    border: "1px solid white",
    boxSizing: "border-box",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "100%",
    minWidth: "100%",
    minHeight: "fit-content",
    overflow: "hidden",
    resize: "none",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box {...props} component="span" sx={style}>
      {maskedText.map((paragraph, i) => (
        <p key={i}>
          {paragraph.map((sentence, j) => (
            <span key={j}>
              {sentence.map((word, k) => (
                <Word key={k} rawValue={word.raw} displayValue={word.masked} />
              ))}
            </span>
          ))}
        </p>
      ))}
    </Box>
  );
}
