import KathleenHsuehTitle from "@components/KathleenHsuehTitle";
import { css } from "@styled-system/css";
import type React from "react";

const ContactSection = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={css({
        display: "grid",
        lg: {
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
          gap: "0",
        },

        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "1em",
        justifyItems: "center",
        alignItems: "center",
        marginBottom: "8em",
      })}
    >
      <KathleenHsuehTitle />
      <div
        className={css({
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "start",
          fontFamily: "body",
          fontSize: "xmd",
          lg: { fontSize: "llg" },
          color: "primary.text",
        })}
      >
        <h2>Phone: 778-874-9544</h2>
        <h2>Email: kch15@sfu.ca</h2>
        <h2>Surrey, BC, Canada</h2>
      </div>
    </div>
  );
};

export default ContactSection;
