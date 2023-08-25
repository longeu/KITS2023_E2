/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AiOutlineKey } from "react-icons/ai";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} Edu Platform {new Date().getFullYear()}
    </Typography>
  );
};

const ResetPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Re-type Password"
                type="password"
                id="password"
                autoComplete="re-password"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                required
                fullWidth
                name="otp"
                label="One-Time Password"
                type="text"
                id="otp"
                autoComplete="otp"
              />
            </Grid>
            <Grid item xs={3}>
              <Tooltip title="Send OTP">
                <IconButton
                  variant="contained"
                  sx={{ width: "55px", height: "55px", borderRadius: "10px" }}
                >
                  <AiOutlineKey />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset
          </Button>
          <Grid container>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Grid item xs>
                <Typography variant="body2" color="primary">
                  Back to Login
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};

export default ResetPassword;
