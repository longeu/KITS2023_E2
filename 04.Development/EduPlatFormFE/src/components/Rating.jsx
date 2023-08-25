/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { MdStarRate } from "react-icons/md";
import IntToStars from "./IntToStars";

const Rating = () => {
  const rated = [
    {
      user: {
        firstName: "Timw",
        lastName: "Hao",
        avatarUrl: "https://source.unsplash.com/random",
      },
      stars: 2,
      reviews:
        "Bác Linh giải thích dễ hiểu, lý thuyết ngắn gọn, thực hành nhiều. Anh em nào mới bắt đầu học AWS thì nên học course này.Mong sẽ có thêm nhiều courses hay như vầy từ bác Linh",
      time: "2 weeks", //function calculator
    },
    {
      user: {
        firstName: "Timw",
        lastName: "Hao",
        avatarUrl: "https://source.unsplash.com/random",
      },
      stars: 2,
      reviews:
        "Bác Linh giải thích dễ hiểu, lý thuyết ngắn gọn, thực hành nhiều. Anh em nào mới bắt đầu học AWS thì nên học course này.Mong sẽ có thêm nhiều courses hay như vầy từ bác Linh",
      time: "2 weeks", //function calculator
    },
    {
      user: {
        firstName: "Timw",
        lastName: "Hao",
        avatarUrl: "https://source.unsplash.com/random",
      },
      stars: 2,
      reviews:
        "Bác Linh giải thích dễ hiểu, lý thuyết ngắn gọn, thực hành nhiều. Anh em nào mới bắt đầu học AWS thì nên học course này.Mong sẽ có thêm nhiều courses hay như vầy từ bác Linh",
      time: "2 weeks", //function calculator
    },
    {
      user: {
        firstName: "Timw",
        lastName: "Hao",
        avatarUrl: "https://source.unsplash.com/random",
      },
      stars: 2,
      reviews:
        "Bác Linh giải thích dễ hiểu, lý thuyết ngắn gọn, thực hành nhiều. Anh em nào mới bắt đầu học AWS thì nên học course này.Mong sẽ có thêm nhiều courses hay như vầy từ bác Linh",
      time: "2 weeks", //function calculator
    },
  ];

  return (
    <div id="rating">
      <div style={{ margin: "15px 0" }}>
        <MdStarRate color="#f69c08" size={20} />
        <Typography
          variant="h5"
          style={{ marginLeft: "10px", fontWeight: "bold", display: "inline" }}
        >
          {Math.floor(Math.random() * 5)} course rating - {Math.floor(Math.random() * 50)} ratings
        </Typography>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: 30,
          rowGap: 20,
        }}
      >
        {rated.map((rate, index) => {
          return (
            <div
              key={index}
              style={{ borderTop: "1px solid grey", paddingTop: 20 }}
            >
              <div style={{ display: "flex" }}>
                <Avatar
                  src={rate.user.avatarUrl}
                  sx={{ width: 40, height: 40 }}
                  style={{ marginRight: 10 }}
                />
                <div>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "18px",
                      paddingTop: "2px",
                    }}
                  >
                    {rate.user.firstName +
                      " " +
                      rate.user.lastName.charAt(0) +
                      "."}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold", fontSize: 14 }}
                  >
                    <span style={{ color: "#f69c08", marginRight: 10 }}>
                      <IntToStars int={rate.stars} />
                    </span>
                    <i>{rate.time}</i>
                  </Typography>
                </div>
              </div>

              <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
                {rate.reviews}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
