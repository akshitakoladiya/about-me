"use client";

import { Box } from "@mui/material";

export default function GradientDivider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 1,
        background:
          "linear-gradient(90deg, transparent, rgba(59,130,246,.35), transparent)",
      }}
    />
  );
}