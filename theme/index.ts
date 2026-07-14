import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { getPalette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export default function getTheme(mode: "light" | "dark") {
  let theme = createTheme({
    palette: getPalette(mode),

    typography,

    shape: {
      borderRadius: 20,
    },

    components,
  });

  theme = responsiveFontSizes(theme);

  return theme;
}