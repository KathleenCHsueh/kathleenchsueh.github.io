import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "Recipe for the Button component",
  base: {
    fontFamily: "body",
    fontSize: "md",
    padding: "10px 32px",
    borderRadius: "100px",
    backgroundColor: "primary.button",
    color: "secondary.text",
    border: "none",
    cursor: "pointer",
    _hover: {
      backgroundColor: "accent.button",
    },
    _active: {
      backgroundColor: "accent.button",
    },
  },
});
