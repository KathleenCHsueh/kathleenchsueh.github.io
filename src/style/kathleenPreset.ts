import { definePreset } from "@pandacss/dev";
import { colors } from "./tokens/colors";
import { segmentGroupRecipe } from "./recipes/SegmentGroupRecipe";
import { fonts, fontSizes } from "./tokens/fonts";

export default definePreset({
  name: "kathleenPreset",
  theme: {
    tokens: {
      colors,
      fonts,
      fontSizes,
    },
    slotRecipes: {
      segmentGroup: segmentGroupRecipe,
    },
  },
});
