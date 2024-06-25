import { Box, BoxProps } from "@mui/material"; // Assuming you're using Material-UI for the sx prop

//Word is a span
type WordProps = BoxProps & {
  rawValue?: string;
  displayValue?: string;
};

function Word({
  className,
  rawValue,
  displayValue,
  ...props
}: Readonly<WordProps>) {
  const styles = {

    color: "black",
    "&:hover": {
      position: "relative",
      color: "transparent",
      backgroundColor: "yellow",
      "&::after": {
        content: "attr(data-value)",
        alignSelf: "center",
        color: "black",
        position: "absolute",
        left: 0,
      },
    },
  };

  return (
    <Box {...props} component="span" data-value={rawValue} sx={styles}>
      {displayValue}
    </Box>
  );
}

export default Word;
