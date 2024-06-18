import { Box } from "@mui/material";
import SocialLinks from "./Links.socials";
import CopyrightNotice from "./CopyrightNotice";

export default function Footer() {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  return (
    <Box component="footer" sx={style}>
      <SocialLinks />
      <CopyrightNotice />
    </Box>
  );
}
