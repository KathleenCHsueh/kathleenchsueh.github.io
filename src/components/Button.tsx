import type React from "react";
import { button } from "@styled-system/recipes";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      style={{
        width: "195px",
      }}
      className={button()}
    >
      {children}
    </button>
  );
};

export default Button;
