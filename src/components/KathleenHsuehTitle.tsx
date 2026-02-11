import { css } from "@styled-system/css";

const KathleenHsuehTitle = () => {
  return (
    <div
      className={css({
        fontFamily: "title",
        fontSize: "llg",
        lg: { fontSize: "xlg" },
        color: "accent.text",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h1>Kathleen</h1>
      <h1>Hsueh</h1>
    </div>
  );
};

export default KathleenHsuehTitle;
