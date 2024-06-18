import { Link, useTheme } from "@mui/material";

export default function BaseLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
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
    <Link href={href} target="_blank" rel="noopener noreferrer" sx={style}>
      {children}
    </Link>
  );
}
