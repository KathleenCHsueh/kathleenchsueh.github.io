import { css } from "@styled-system/css";

const WIPPage = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <h1
        className={css({
          fontFamily: "body",
          fontSize: "llllg",
          color: "primary.text",
        })}
      >
        Coming soon...
      </h1>
      <img src="/sad_cat.png" alt="Work in Progress" />
    </div>
  );
};

export default WIPPage;
