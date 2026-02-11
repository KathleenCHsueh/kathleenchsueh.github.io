import { css } from "@styled-system/css";
import Button from "../Button";
import KathleenHsuehTitle from "@components/KathleenHsuehTitle";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className={css({
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        gap: "2em",
        lg: {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          justifyItems: "center",
          alignItems: "center",
        },
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
        <KathleenHsuehTitle />
        <Button
          className={css({ display: "none", lg: { display: "block" } })}
          onClick={() => navigate("/home#contact")}
        >
          Get In Touch
        </Button>
        <p
          className={css({
            fontFamily: "body",
            fontSize: "sm",
            color: "primary.text",
            textAlign: "center",
            display: "block",
            padding: "1em",
            lg: { display: "none" },
          })}
        >
          A Simon Fraser University student and creator who loves making videos
          and designs, using psychology to make experiences feel more human and
          real.
        </p>
      </div>
      <img
        src="/christmas_hero.png"
        alt="Christmas Market"
        className={css({
          width: "100%",
          maxWidth: "630px",
          height: "auto",
          objectFit: "contain",
        })}
      />
      <Button className={css({ display: "block", lg: { display: "none" } })}>
        Get In Touch
      </Button>
    </div>
  );
};

export default HeroSection;
