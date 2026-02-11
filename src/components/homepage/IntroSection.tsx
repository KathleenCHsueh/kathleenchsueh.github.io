import { css } from "@styled-system/css";

const IntroSection = () => {
  return (
    <div
      className={css({
        lg: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4",
          alignItems: "center",
        },
      })}
    >
      <img
        src="/robot.png"
        alt="CGI robot"
        className={css({
          width: "100%",
          maxWidth: "630px",
          height: "auto",
          objectFit: "contain",
        })}
      />
      <div
        className={css({
          display: "none",
          lg: {
            display: "flex",
            flexDirection: "column",
            fontFamily: "body",
            color: "primary.text",
            maxWidth: "434px",
            justifyContent: "center",
            margin: "0 auto",
          },
        })}
      >
        <h2
          className={css({
            fontSize: "lg",
          })}
        >
          Who is she?
        </h2>
        <h1
          className={css({
            fontSize: "xlg",
          })}
        >
          I'm Kathleen
        </h1>
        <p
          className={css({
            fontSize: "md",
          })}
        >
          A Simon Fraser University student and creator who loves making videos
          and designs, using pyschology to make experiences feel more human and
          real.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
