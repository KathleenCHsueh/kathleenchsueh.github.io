import { css } from "@styled-system/css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "primary.text",
        })}
      >
        <h1
          className={css({
            fontFamily: "body",
            fontSize: "lllg",
            lg: { fontSize: "xxlg" },
          })}
        >
          My Portfolio
        </h1>
        <p
          className={css({
            fontFamily: "body",
            fontSize: "sm",
            lg: { fontSize: "xmd", maxWidth: "846px" },
            textAlign: "center",
            maxWidth: "275px",
          })}
        >
          Welcome to my portfolio. Here you'll find a selection of my work.
          Explore my projects to learn more about what I do.
        </p>
        <Button
          className={css({
            marginTop: "2em",
          })}
          onClick={() => navigate("/portfolio")}
        >
          View Portfolio
        </Button>
      </div>
    </div>
  );
};

export default PortfolioSection;
