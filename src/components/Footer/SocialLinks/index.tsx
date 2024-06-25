import { Box, BoxProps, useTheme } from "@mui/material";
import socialData from "../../../utils/socials.data";
import Link from "./Link";

export default function SocialLinksContainer(props: Readonly<BoxProps>) {
  const theme = useTheme();
  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    " a": {
      color: "black",
      "&:hover": {
        color: theme.palette.primary.main,
        transform: "scale(1.2)",
        transition: "all 0.3s",
      },
    },
  };

  return (
    <Box {...props} sx={style}>
      {socialData.map((social, i) => (
        <Link key={i} href={social.href}>
          {social.icon}
        </Link>
      ))}
    </Box>
  );
}
