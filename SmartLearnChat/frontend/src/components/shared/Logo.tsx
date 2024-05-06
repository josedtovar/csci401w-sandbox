import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="bot.png"
          alt="bot"
          width={"50px"}
          height={"50px"}
          className="image-inverted"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          
        }}
      >
        <span style={{ fontSize: "20px" }}>SmartLearnChat </span>
      </Typography>
    </div>
  );
};

export default Logo;