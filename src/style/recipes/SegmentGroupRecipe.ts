import { segmentGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const segmentGroupRecipe = defineSlotRecipe({
  className: "segmentGroup",
  description: "Recipe for the Segment Group component",
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4em",
    },
    indicator: {},
    item: {
      fontFamily: "body",
      color: "primary.text",
      _checked: {
        color: "accent.text",
      },
      _hover: {
        color: "accent.text",
      },
    },
    itemText: {},
    itemControl: {},
  },
  variants: {
    size: {
      lg: {
        item: {
          fontSize: "lg",
        },
      },
      md: {
        item: {
          fontSize: "md",
        },
      },
    },
  },
});
