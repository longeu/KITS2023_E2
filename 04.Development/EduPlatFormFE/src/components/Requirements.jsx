/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { MdLens } from "react-icons/md";

const Requirements = ({ course }) => {
  return (
    <div style={{ padding: "10px", margin: "20px 0" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", padding: "10px" }}>
        Yêu cầu
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={2} direction="column">
          {course.requirements.map((requirement, index) => {
            return (
              <Grid xs={12} key={index}>
                <MdLens style={{ height: 10 }} />{" "}
                {/* icon này đang chưa display flex đúng được*/}
                <Typography style={{ display: "inline" }}>
                  <span style={{ marginLeft: 10 }}>{requirement}</span>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Requirements;
