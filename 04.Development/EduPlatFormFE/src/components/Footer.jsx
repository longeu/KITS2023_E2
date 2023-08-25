import { Box, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "} Edu Platform {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Copyright />
    </Box>
  );
};

export default Footer;
