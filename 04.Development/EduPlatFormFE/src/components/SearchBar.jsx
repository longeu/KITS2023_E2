/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  InputBase,
  Paper,
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch, courseData }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // For Menu component

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);

    const filteredResults = courseData.filter((course) =>
      course.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredResults);
    onSearch(searchValue);
  };

  const handleSearchIconClick = (event) => {
    setAnchorEl(event.currentTarget); // Open Menu component
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close Menu component
  };

  return (
    <Paper
      square={true}
      component="form"
      sx={{
        mr: 1,
        p: "2px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <InputBase
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleSearch}
        fullWidth
      />
      <IconButton
        type="button"
        sx={{ p: "10px", borderRadius: 0 }}
        aria-label="search"
        onClick={handleSearchIconClick}
      >
        <MdSearch />
      </IconButton>
      <Menu
        square={true}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          "& .MuiPaper-root": { borderRadius: 0 },
        }}
      >
        <Typography variant="body1" sx={{ p: "10px" }}>
          You search for {searchText}:
        </Typography>
        <List>
          {searchResults.map((result) => (
            <Link
              to={`/course/${result.id}`}
              key={result.id}
              onClick={handleMenuClose}
            >
              <MenuItem>
                <ListItemText primary={result.title} />
              </MenuItem>
            </Link>
          ))}
        </List>
      </Menu>
    </Paper>
  );
};

export default SearchBar;
