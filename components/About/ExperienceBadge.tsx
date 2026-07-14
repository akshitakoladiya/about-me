"use client";

import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ExperienceBadge() {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "absolute",
          bottom: 24,
          right: -24,
          px: 3,
          py: 2,
          borderRadius: 4,
          bgcolor: "background.paper",
          border: 1,
          borderColor: "divider",
          textAlign: "center",
          backdropFilter: "blur(16px)",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          fontWeight={700}
        >
          8+
        </Typography>

        <Typography variant="body2">
          Years Experience
        </Typography>
      </Paper>
    </motion.div>
  );
}