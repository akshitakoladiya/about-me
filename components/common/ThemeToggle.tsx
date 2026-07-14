"use client";

import { motion } from "framer-motion";

import {
  IconButton,
  Tooltip,
} from "@mui/material";

import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import { useThemeMode } from "@/app/providers";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title="Toggle Theme">
      <IconButton onClick={toggleTheme}>
        <motion.div
          key={mode}
          initial={{
            rotate: -180,
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {mode === "dark" ? (
            <LightModeRoundedIcon />
          ) : (
            <DarkModeRoundedIcon />
          )}
        </motion.div>
      </IconButton>
    </Tooltip>
  );
}