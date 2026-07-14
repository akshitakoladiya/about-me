"use client";

import { Stack } from "@mui/material";

import ThemeToggle from "@/components/common/ThemeToggle";
import ResumeButton from "./ResumeButton";

export default function HeaderActions() {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <ThemeToggle />

      {/* <ResumeButton /> */}
    </Stack>
  );
}