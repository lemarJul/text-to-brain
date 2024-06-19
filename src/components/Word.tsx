import React from "react";
import { Box } from "@mui/material"; // Assuming you're using Material-UI for the sx prop

//Word is a span
type WordProps = React.HTMLAttributes<HTMLSpanElement> & {
  rawValue?: string;
  displayValue?: string;
};

const styles = {
  word: {
    color: "black",
    "&:hover": {
      position: "relative",
      color: "transparent",
      backgroundColor: "yellow",
      "&::after": {
        content: "attr(data-value)",
        alignSelf: "center",
        cursor: "pointer",
        color: "black",
        position: "absolute",
        left: 0,
      },
    },
  },
};

function Word({ className, rawValue, displayValue, ...rest }: WordProps) {
  return (
    <Box component="span" data-value={rawValue} sx={styles.word} {...rest}>
      {displayValue}
    </Box>
  );
}

export default Word;
