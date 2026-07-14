import { TypographyOptions } from "@mui/material/styles";

export const typography: TypographyOptions = {
  fontFamily: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),

  h1: {
    fontWeight: 800,
    fontSize: "4rem",
    lineHeight: 1.1,
    letterSpacing: "-0.04em",
  },

  h2: {
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
  },

  h3: {
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },

  h4: {
    fontWeight: 600,
    fontSize: "1.75rem",
    lineHeight: 1.3,
  },

  h5: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.35,
  },

  h6: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },

  subtitle1: {
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: 1.7,
  },

  subtitle2: {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.6,
  },

  body1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.8,
  },

  body2: {
    fontWeight: 400,
    fontSize: "0.95rem",
    lineHeight: 1.7,
  },

  button: {
    fontWeight: 600,
    fontSize: "1rem",
    textTransform: "none",
    letterSpacing: "0.02em",
  },

  caption: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },

  overline: {
    fontWeight: 700,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
  },
};