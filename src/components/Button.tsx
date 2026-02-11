import type React from "react";
import { button } from "@styled-system/recipes";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        width: "195px",
        ...props.style,
      }}
      className={className + " " + button()}
    >
      {children}
    </button>
  );
};

export default Button;
