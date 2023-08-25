/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { MdOutlineCheck } from "react-icons/md";

const Objectives = ({ course }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "20px" }}>
      <Typography variant="h5" style={{ fontWeight: "bold", padding: "10px" }}>
        Những gì bạn sẽ học
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          {course.objectives.split(',').map((objective, index) => {
            return (
              <Grid xs={6} key={index}>
                <MdOutlineCheck />{" "}
                {/* icon này đang chưa display flex đúng được*/}
                <Typography style={{ display: "inline" }}>
                  <span style={{ marginLeft: 10 }}>{objective}</span>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Objectives;
