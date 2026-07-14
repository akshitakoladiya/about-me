"use client";

import { Stack, Typography } from "@mui/material";
import Logo from "../Header/Logo";

export default function FooterBrand() {
  return (
    <Stack spacing={2}>
      <Logo />

      <Typography color="text.secondary">
        Building enterprise software using React,
        Next.js, Node.js and GraphQL.
      </Typography>
    </Stack>
  );
}