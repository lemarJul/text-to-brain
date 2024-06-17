import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer className="footer">
      <Box
        className="social"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "1rem",
          padding: "1rem",
          " > a": {
            color: "black",
            "&:hover": {
              color: theme.palette.primary.main,
              transform: "scale(1.2)",
              transition: "all 0.3s",
            },
          },
        }}
      >
        <a
          href="https://github.com/lemarJul/text-to-brain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeIcon
            sx={{
              fontSize: "1.4rem",
              backgroundColor: "black",
              color: "white",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              transition: "all 0.3s",
            }}
          />
        </a>
        <a
          href="https://github.com/lemarJul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/julien-lemarchand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/lemar.jul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </Box>
      <div className="container">
        {/* gray and small text */}
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "gray", fontSize: "0.8rem" }}
        >
          &copy; 2020 Text to Brain by Julien Lemarchand
        </Typography>
      </div>
    </footer>
  );
}
