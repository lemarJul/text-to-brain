import { Box, BoxProps } from "@mui/material";
import SocialLinks from "./SocialLinks";
import CopyrightNotice from "./CopyrightNotice";

export default function Footer(props: Readonly<BoxProps>) {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <Box {...props} component="footer" sx={style}>
      <SocialLinks />
      <CopyrightNotice />
    </Box>
  );
}
