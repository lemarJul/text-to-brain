import { useAppContext } from "../../utils/context";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Box, BoxProps } from "@mui/system";

export default function EditArea(props: Readonly<BoxProps>) {
  const { textContent, setTextContent } = useAppContext();

  const style = {
    "& :first-child": {
      // as TextareaAutosize can't be styled directly with sx prop
      border: "1px solid #ccc",
      boxSizing: "border-box",
      padding: "20px",
      borderRadius: "5px",
      width: "100%",
      minHeight: "fit-content",
      overflow: "hidden",
      resize: "none",
    },
  };
  return (
    <Box {...props} sx={style}>
      <TextareaAutosize
        placeholder="A good speech starts here..."
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
    </Box>
  );
}
