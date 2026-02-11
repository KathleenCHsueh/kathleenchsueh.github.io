import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens.fonts({
  body: { value: "'Jaldi', sans-serif" },
  heading: { value: "'Jaldi', sans-serif" },
  title: { value: "'Geostar', serif" },
});

export const fontSizes = defineTokens.fontSizes({
  sm: { value: "16px" },
  md: { value: "20px" },
  xmd: { value: "24px" },
  lg: { value: "32px" },
  llg: { value: "36px" },
  lllg: { value: "40px" },
  llllg: { value: "48px" },
  xlg: { value: "64px" },
  xxlg: { value: "96px" },
});
