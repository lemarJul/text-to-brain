import { Link, LinkProps, useTheme } from "@mui/material";

export default function BaseLink({
  children,
  href,
  ...props
}: Readonly<LinkProps>) {
  const theme = useTheme();
  const style = {
    color: "black",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.2)",
      transition: "all 0.3s",
    },
  };

  return (
    <Link
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={style}
    >
      {children}
    </Link>
  );
}
