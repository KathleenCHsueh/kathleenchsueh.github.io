import { css } from "@styled-system/css";

const baseAssetPath = "/independent-works";

const woolGallery = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
  "image8.png",
];

const designGallery = [
  "image9.png",
  "image10.png",
  "image11.png",
  "image12.png",
  "image13.png",
];

const IndependentDesignerProject = () => {
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
          Independent Designer Project
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
          Self-Employed (2022 - Present)
        </p>
      </div>
      <div
        className={css({
          marginBottom: "6em",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr",
          justifyItems: "center",
          gap: "2em",
          lg: {
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr",
            alignItems: "center",
            justifyItems: "center",
            maxWidth: "1042px",
            gap: "0",
          },
        })}
      >
        <img
          src="/christmas_hero.png"
          alt="Independent Designer Project"
          className={css({
            width: "100%",
            maxWidth: "523px",
            height: "auto",
            objectFit: "contain",
          })}
        />
        <p
          className={css({
            fontFamily: "body",
            color: "primary.text",
            fontSize: "sm",
            textAlign: "center",
            maxWidth: "283px",
            lineHeight: "2em",
            lg: {
              textAlign: "left",
              maxWidth: "454px",
              fontSize: "md",
              lineHeight: "1.75em",
            },
          })}
        >
          I create handmade wool-felted pieces and customized hand painted
          poster signs inspired by pets, characters, and little moments that
          matter. Each piece begins with a conversation I love listening to
          stories, sketching ideas, and turning them into something warm,
          personal, and one-of-a-kind. I share my work online and at small local
          markets, where I enjoy meeting people face-to-face and connecting
          through handmade art. Whether it's a felted pet portrait or a custom
          poster, my goal is always the same: to make something thoughtful,
          cozy, and made just for you.
        </p>
      </div>
      <div className={css({ marginBottom: "6em" })}>
        <div
          className={css({
            display: "grid",
            gridTemplateRows: "repeat(4, 181px)",
            gridTemplateColumns: "repeat(2, 181px)",
            sm: {
              gridTemplateRows: "repeat(4, 1fr)",
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            lg: {
              gridTemplateRows: "1fr 1fr",
              gridTemplateColumns: "repeat(4, 253px)",
            },
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            placeItems: "center",
          })}
        >
          {woolGallery.map((image) => (
            <img
              key={image}
              src={`${baseAssetPath}/${image}`}
              alt={`Wool Gallery ${image}`}
              className={css({
                width: "181px",
                height: "181px",
                sm: {
                  width: "45vw",
                  height: "auto",
                },
              })}
            />
          ))}
        </div>
        <p
          className={css({
            fontFamily: "body",
            fontSize: "sm",
            sm: { fontSize: "md" },
            color: "primary.text",
            opacity: 0.6,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "846px",
            margin: "1em auto",
            padding: "2em",
          })}
        >
          Create custom wool-felted pieces inspired by pets and original
          characters, made by hand with care and attention to detail
        </p>
      </div>
      <div>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridColumnGap: "10px",
            gridRowGap: "10px",
            lg: {
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gridColumnGap: "0px",
              gridRowGap: "0px",
              width: "1064px",
              justifyItems: "baseline",
            },

            alignItems: "center",
            justifyItems: "center",
          })}
        >
          <img
            className={css({
              maxWidth: "374px",
              gridArea: "1 / 1 / 2 / 3",
              sm: {
                maxWidth: "90vw",
              },
              lg: {
                maxWidth: "100%",
                maxHeight: "343px",
                gridArea: "1 / 1 / 2 / 3",
              },
            })}
            src={`${baseAssetPath}/${designGallery[0]}`}
            alt="Design Gallery 0"
          />
          <img
            className={css({
              width: "182px",
              height: "182px",
              objectFit: "fill",
              gridArea: "2 / 1 / 3 / 2",
              sm: {
                width: "45vw",
                height: "auto",
              },
              lg: {
                width: "100%",
                height: "343px",
                objectFit: "contain",
                gridArea: "1 / 3 / 2 / 4",
              },
            })}
            src={`${baseAssetPath}/${designGallery[1]}`}
            alt="Design Gallery 1"
          />
          <img
            className={css({
              width: "182px",
              height: "182px",
              objectFit: "fill",
              gridArea: "2 / 2 / 3 / 3",
              sm: {
                width: "45vw",
                height: "auto",
              },
              lg: {
                height: "389px",
                width: "331px",
                gridArea: "2 / 1 / 3 / 2",
              },
            })}
            src={`${baseAssetPath}/${designGallery[2]}`}
            alt="Design Gallery 2"
          />
          <img
            className={css({
              width: "182px",
              height: "182px",
              objectFit: "fill",
              gridArea: "3 / 1 / 4 / 2",
              sm: {
                width: "45vw",
                height: "auto",
              },
              lg: {
                height: "389px",
                width: "331px",
                gridArea: "2 / 2 / 3 / 3",
              },
            })}
            src={`${baseAssetPath}/${designGallery[3]}`}
            alt="Design Gallery 3"
          />
          <img
            className={css({
              width: "182px",
              height: "182px",
              objectFit: "fill",
              gridArea: "3 / 2 / 4 / 3",
              sm: {
                width: "45vw",
                height: "auto",
              },
              lg: {
                height: "389px",
                width: "355px",
                gridArea: "2 / 3 / 3 / 4",
              },
            })}
            src={`${baseAssetPath}/${designGallery[4]}`}
            alt="Design Gallery 4"
          />
        </div>
        <p
          className={css({
            fontFamily: "body",
            fontSize: "sm",
            sm: { fontSize: "md" },
            color: "primary.text",
            opacity: 0.6,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "846px",
            margin: "1em auto",
            padding: "2em",
          })}
        >
          Work closely with clients to understand their stories, preferences,
          and ideas, translating them into one-of-a-kind felt creations Share
          sketches and visual mockups with clients to ensure each piece feels
          personal and meaningful
        </p>
      </div>
    </div>
  );
};

export default IndependentDesignerProject;
