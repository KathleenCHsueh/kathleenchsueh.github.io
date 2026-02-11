import { defineTokens } from "@pandacss/dev";

export const colors = defineTokens.colors({
  primary: {
    text: { value: "#EDD6C6" },
    button: { value: "#EDD6C6" },
  },
  secondary: {
    text: { value: "#142030" },
  },
  accent: {
    text: { value: "#FF498D" },
    button: { value: "#FF498D" },
  },
  background: {
    dark: { value: "#142030" },
    blue: { value: "#183745" },
  },
});
