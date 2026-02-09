import { css } from "@styled-system/css";
import Button from "../Button";

const Hero = () => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        justifyItems: "center",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        })}
      >
        <div
          className={css({
            fontFamily: "title",
            fontSize: "xlg",
            color: "accent.text",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "",
          })}
        >
          <h1>Kathleen</h1>
          <h1>Hsueh</h1>
        </div>
        <Button>Get In Touch</Button>
      </div>
      <img
        src="/src/assets/christmas_hero.png"
        alt="Christmas Market"
        className={css({
          width: "630px",
          height: "606px",
          objectFit: "contain",
        })}
      />
    </div>
  );
};

export default Hero;
