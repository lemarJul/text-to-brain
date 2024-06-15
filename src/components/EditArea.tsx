import React from "react";
import { useAppContext } from "../utils/context";
import {
  TextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/base/TextareaAutosize";

const EditArea: React.FC<TextareaAutosizeProps> = ({ className, ...rest }) => {
  const { textContent, setTextContent } = useAppContext();

  return (
    <TextareaAutosize
      className={`textarea ${className}`}
      placeholder="A good speech starts here..."
      value={textContent}
      onChange={(e) => setTextContent(e.target.value)}
      {...rest}
    />
  );
};

export default EditArea;
