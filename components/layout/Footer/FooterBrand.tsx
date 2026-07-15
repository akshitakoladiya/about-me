"use client";

import { Stack, Typography } from "@mui/material";
import Logo from "../Header/Logo";

export default function FooterBrand() {
  return (
    <Stack spacing={2}>
      <Logo />

      <Typography color="text.secondary">
        Full-Stack Developer building modern web and mobile applications with MongoDB, Express.js, React, Next.js, Node.js
        NestJS, React Native, GraphQL, and Firebase. Focused on performance, scalability, and exceptional user experiences.
      </Typography>
    </Stack>
  );
}