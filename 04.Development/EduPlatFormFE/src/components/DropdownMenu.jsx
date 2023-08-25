/* eslint-disable react/prop-types */
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutDialog from "./LogoutDialog";

export default function DropdownMenu () {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosing = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    handleClosing();
    navigate("/");
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCreate = () => {
    navigate("/course/create");
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": { backgroundColor: "#0f47ad", borderRadius: 0 },
        }}
      >
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose} sx={{ color: "white" }}>
            Profile
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} sx={{ color: "white" }}>
          Library
        </MenuItem>
        <MenuItem onClick={handleOpen} sx={{ color: "white" }}>
          Logout
        </MenuItem>
        {localStorage.getItem('role') == 'ROLE_TEACHER' &&
        <MenuItem onClick={handleCreate} sx={{ color: "white" }}>
          Create
        </MenuItem>}
      </Menu>
      <LogoutDialog
        open={open}
        onClose={handleClosing}
        onLogout={handleLogout}
      />
    </div>
  );
}
