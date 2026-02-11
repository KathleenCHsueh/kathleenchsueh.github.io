import { definePreset } from "@pandacss/dev";
import { colors } from "./tokens/colors";
import { segmentGroupRecipe } from "./recipes/SegmentGroupRecipe";
import { fonts, fontSizes } from "./tokens/fonts";
import { buttonRecipe } from "./recipes/ButtonRecipe";

export default definePreset({
  name: "kathleenPreset",
  theme: {
    tokens: {
      colors,
      fonts,
      fontSizes,
    },
    breakpoints: {
      sm: "425px",
      lg: "1024px",
    },
    recipes: {
      button: buttonRecipe,
    },
    slotRecipes: {
      segmentGroup: segmentGroupRecipe,
    },
  },
});
