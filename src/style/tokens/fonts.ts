import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  body: { value: "'Jaldi', sans-serif" },
  heading: { value: "'Jaldi', sans-serif" },
  title: { value: "'Geostar', serif" },
});

export const fontSizes = defineTokens.fontSizes({
  md: { value: "20px" },
  xmd: { value: "24px" },
  lg: { value: "32px" },
  xlg: { value: "64px" },
  xxlg: { value: "96px" },
});
