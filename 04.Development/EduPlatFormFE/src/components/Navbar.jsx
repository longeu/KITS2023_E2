/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  Tooltip,
  createTheme,
} from "@mui/material";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";
import { MdOutlineExplore } from "react-icons/md";
import Logo from "./Logo";
import whitelogo from '/logo.png';
const theme = createTheme({
  palette: {
    primary: {
      main: "#1870cc",
    },
  },
});
const getUserInfo = async () => {
  localStorage.getItem('role') === 'ROLE_STUDENT' ?
    fetch('http://localhost:8080/api/student/info', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    }
    ).then(res => res.json()).then(data => localStorage.setItem('userlogin', JSON.stringify(data)))
    : (localStorage.getItem('role') === 'ROLE_TEACHER' ? fetch('http://localhost:8080/api/teacher/info', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    }
    ).then(res => res.json()).then(data => localStorage.setItem('userlogin', JSON.stringify(data))) : null)

}
const Navbar = ({ courseData }) => {
  const navigate = useNavigate();
  getUserInfo();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <IconButton edge="start" color="inherit" onClick={() => navigate("/home")} aria-label="menu" sx={{ border: 'none', borderRadius: '0' }}>
              <Logo src={whitelogo} />
            </IconButton>
          </Box>
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <SearchBar courseData={courseData} /> {/* not pass onSearch to SearchBar right now */}
            <Tooltip title="Browse">
              <IconButton
                color="inherit"
                onClick={() => {
                  navigate("/course");
                }}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <MdOutlineExplore />
              </IconButton>
            </Tooltip>
            <Tooltip title="Wishlist">
              <IconButton
                style={{ color: "white" }}
                onClick={() => navigate("/wishlist")}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <AiOutlineHeart />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                style={{ color: "white" }}
                onClick={() => navigate("/cart")}
                sx={{ height: "fit-content", borderRadius: 0 }}
              >
                <BsCart />
              </IconButton>
            </Tooltip>
            <DropdownMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
