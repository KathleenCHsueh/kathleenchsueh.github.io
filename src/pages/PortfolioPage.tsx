import { css } from "@styled-system/css/css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [projects] = useState([
    {
      thumbnailSrc: "/christmas_hero.png",
      title: "Independent Designer & Maker",
      duration: "2022 - Present",
      pageUrl: "/independent-designer-project",
    },
    {
      thumbnailSrc: "/carrot.png",
      title: "Veggie Escape",
      duration: "2024",
      pageUrl: "/veggie-escape",
    },
    {
      thumbnailSrc: "/robot.png",
      title: "Graphic Design",
      duration: "2023 - Present",
      pageUrl: "/wip",
    },
    {
      thumbnailSrc: "/fish.png",
      title: "Animation",
      duration: "2022",
      pageUrl: "/wip",
    },
  ]);

  return (
    <>
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
      </div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3em",
          marginTop: "3em",
        })}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className={css({
              display: "inline-flex",
              textAlign: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "background.blue",
            })}
            onClick={() => navigate(project.pageUrl)}
          >
            <img
              src={project.thumbnailSrc}
              alt={`${project.title} thumbnail`}
              className={css({
                lg: { width: "522px", height: "522px" },
                width: "377px",
                height: "377px",
                objectFit: "cover",
              })}
            />
            <div className={css({ padding: "1em" })}>
              <p
                className={css({
                  fontFamily: "body",
                  fontSize: "xmd",
                  lg: { fontSize: "lg" },
                  color: "primary.text",
                })}
              >
                {project.title}
              </p>
              <p
                className={css({
                  fontFamily: "body",
                  fontSize: "md",
                  lg: { fontSize: "xmd" },
                  color: "primary.text",
                })}
              >
                {project.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioPage;
