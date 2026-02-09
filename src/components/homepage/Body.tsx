import { css } from "@styled-system/css";
import Button from "../Button";

const Body = () => {
  return (
    <div className={css({ marginTop: "3em" })}>
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
            fontSize: "xxlg",
          })}
        >
          My Portfolio
        </h1>
        <p
          className={css({
            fontFamily: "body",
            fontSize: "xmd",
            textAlign: "center",
            maxWidth: "846px",
          })}
        >
          Welcome to my portfolio. Here you'll find a selection of my work.
          Explore my projects to learn more about what I do.
        </p>
        <Button>View Portfolio</Button>
      </div>
    </div>
  );
};

export default Body;
