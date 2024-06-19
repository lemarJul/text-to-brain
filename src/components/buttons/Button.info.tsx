import { IconButton, IconButtonProps } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useTheme } from "@mui/material";

export default function InfoButton(props: IconButtonProps) {
  const theme = useTheme();

  return (
    <IconButton
      {...props}
      aria-label="info"
      sx={{
        color: "black",
        minWidth: "0",
        width: "fit-content",
        aspectRatio: "1",

        "&:hover": {
          color: theme.palette.primary.main,
          transform: "scale(1.1)",
          backgroundColor: "transparent",
        },
      }}
    >
      <InfoOutlinedIcon />
    </IconButton>
  );
}