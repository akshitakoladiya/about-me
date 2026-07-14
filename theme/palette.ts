import { PaletteMode, PaletteOptions } from "@mui/material";

export const getPalette = (mode: PaletteMode): PaletteOptions => {
  const isDark = mode === "dark";

  return {
    mode,

    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#1D4ED8",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#06B6D4",
      light: "#67E8F9",
      dark: "#0891B2",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#22C55E",
    },

    warning: {
      main: "#F59E0B",
    },

    error: {
      main: "#EF4444",
    },

    info: {
      main: "#0EA5E9",
    },

    background: {
      default: isDark ? "#09090B" : "#F8FAFC",
      paper: isDark ? "#18181B" : "#FFFFFF",
    },

    text: {
      primary: isDark ? "#FFFFFF" : "#0F172A",
      secondary: isDark ? "#A1A1AA" : "#64748B",
    },

    divider: isDark
      ? "rgba(255,255,255,0.08)"
      : "rgba(15,23,42,0.08)",

    action: {
      hover: isDark
        ? "rgba(255,255,255,0.05)"
        : "rgba(15,23,42,0.04)",

      selected: isDark
        ? "rgba(59,130,246,0.16)"
        : "rgba(59,130,246,0.10)",
    },
  };
};