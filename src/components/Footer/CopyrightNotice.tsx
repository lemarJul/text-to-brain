import { Typography, TypographyProps } from "@mui/material";

export default function CopyrightNotice(props: Readonly<TypographyProps>) {
  return (
    <Typography
      {...props}
      variant="body2"
      component="span"
      sx={{ color: "gray", fontSize: "0.8rem" }}
    >
      &copy; 2024 - Text to Brain by Julien Lemarchand
    </Typography>
  );
}
