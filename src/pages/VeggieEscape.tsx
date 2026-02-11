import { css } from "@styled-system/css";

const baseAssetPath = "/veggie-escape";

const VeggieEscape = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          fontFamily: "body",
          color: "primary.text",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4em 0",
        })}
      >
        <h1 className={css({ fontSize: "md", lg: { fontSize: "lllg" } })}>
          Veggie Escape
        </h1>
        <p
          className={css({
            lg: {
              fontSize: "md",
            },
            fontSize: "sm",
            color: "primary.text",
            opacity: 0.6,
          })}
        >
          Original Board Game Design (2024)
        </p>
      </div>
      <img
        className={css({
          width: "375px",
          height: "auto",
          sm: {
            width: "95vw",
          },
          lg: {
            width: "1064px",
          },
        })}
        src={`${baseAssetPath}/image1.png`}
        alt="Veggie Escape Hero"
      />
      <p
        className={css({
          fontFamily: "body",
          fontSize: "sm",
          sm: { fontSize: "md" },
          maxWidth: "1064px",
          color: "primary.text",
          opacity: 0.6,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "1em auto",
          paddingBottom: "2em",
        })}
      >
        This project explores collaborative game design through the creation of
        an original board game, combining gameplay mechanics, character design,
        and visual storytelling. I led the team from concept to completion while
        shaping the game’s visual identity and promotional media.
      </p>
      <div>
        <img
          src={`${baseAssetPath}/horizontal.png`}
          alt="Veggie Escape Gallery"
          className={css({
            width: "375px",
            height: "auto",
            sm: {
              width: "95vw",
            },
            lg: {
              width: "1064px",
            },
          })}
        />
      </div>
      <p
        className={css({
          fontFamily: "body",
          fontSize: "sm",
          sm: { fontSize: "md" },
          maxWidth: "1064px",
          color: "primary.text",
          opacity: 0.6,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "1em auto",
          paddingBottom: "2em",
        })}
      >
        Designed an original board game including mechanics, rules, and
        characters Led character design and visual direction
      </p>
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
          gap: "10px",
          maxWidth: "1064px",
          lg: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          },
        })}
      >
        <video
          controls
          autoPlay
          muted
          loop
          playsInline
          className={css({
            width: "100%",
            height: "auto",
            gridArea: "1 / 1 / 3 / 3",
            lg: { gridArea: "1 / 1 / 3 / 3" },
          })}
        >
          <source src={`${baseAssetPath}/trailer.m4v`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src={`${baseAssetPath}/image8.png`}
          alt="Veggie Escape Storyboard"
          className={css({
            gridArea: "3 / 1 / 4 / 2",
            lg: { gridArea: "1 / 3 / 2 / 4", width: "auto", height: "213px" },
          })}
        />
        <img
          src={`${baseAssetPath}/image9.png`}
          alt="Veggie Escape Storyboard"
          className={css({
            gridArea: "3 / 2 / 4 / 3",
            lg: { gridArea: "2 / 3 / 3 / 4", width: "auto", height: "213px" },
          })}
        />
      </div>
      <p
        className={css({
          fontFamily: "body",
          fontSize: "sm",
          sm: { fontSize: "md" },
          maxWidth: "1064px",
          color: "primary.text",
          opacity: 0.6,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          margin: "1em auto",
          paddingBottom: "2em",
        })}
      >
        Produced a promotional video trailer from concept to final cut, leading
        storyboarding, directing on-set filming, and completing post-production
        editing to clearly communicate the project’s theme and visual identity
      </p>
    </div>
  );
};

export default VeggieEscape;
