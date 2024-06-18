import { Box, Typography } from "@mui/material";

export default function CopyrightNotice() {
  return (
    <Box>
      {/* gray and small text */}
      <Typography
        variant="body2"
        component="div"
        sx={{ color: "gray", fontSize: "0.8rem" }}
      >
        &copy; 2024 - Text to Brain by Julien Lemarchand
      </Typography>
    </Box>
  );
}
