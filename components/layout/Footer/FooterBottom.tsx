"use client";

import { Stack, Typography } from "@mui/material";

export default function FooterBottom() {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      justifyContent="space-between"
      spacing={2}
    >
      <Typography color="text.secondary">  </Typography>
      <Typography color="text.secondary"> © {new Date().getFullYear()}  Built with ❤️ Akshita Koladiya</Typography>
    </Stack>
  );
}