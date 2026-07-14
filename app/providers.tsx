"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "@/theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      setMode(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setMode(prefersDark ? "dark" : "light");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextMode = mode === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextMode);

    setMode(nextMode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  if (!mounted) return null;

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}