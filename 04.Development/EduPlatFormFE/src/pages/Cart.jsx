import {
  Box,
  Button,
  Card,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f47ad",
      contrastText: "#fff",
    },
  },
});

const Cart = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h3" sx={{ mt: 3, ml: 10 }}>
          Shopping Cart
        </Typography>
        <Card square={true} sx={{ mt: 3, ml: 10, textAlign: "center" }}>
          <Button
            color="primary"
            sx={{ borderRadius: 0 }}
            onClick={() => navigate("/course")}
          >
            Keep shopping
          </Button>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Cart;
