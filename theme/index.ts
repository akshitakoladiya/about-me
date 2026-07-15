import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { getPalette } from "./palette";
import { Typography } from "./typography";
import { components } from "./components";

export default function getTheme(mode: "light" | "dark") {
  let theme = createTheme({
    palette: getPalette(mode),

    typography: Typography,

    shape: {
      borderRadius: 20,
    },

    components,
  });

  theme = responsiveFontSizes(theme);

  return theme;
}