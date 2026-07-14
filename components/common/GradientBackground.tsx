"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <>
      <Box
        component={motion.div}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#3B82F6 0%,transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.18,
          top: -120,
          left: -120,
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#8B5CF6 0%,transparent 70%)",
          filter: "blur(140px)",
          opacity: 0.15,
          right: -120,
          bottom: -120,
          zIndex: 0,
        }}
      />
    </>
  );
}