"use client";

import { Stack, Typography } from "@mui/material";

const tech = [
  "React, Next.js",
  "Node.js, Nest.js",
  "TypeScript",
  "ReactNative",  
  "GraphQL",
  "MongoDB",
  "Firebase",
];

export default function FooterTech() {
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        mb={1}
      >
        Tech Stack
      </Typography>

      {tech.map((item) => (
        <Typography
          key={item}
          color="text.secondary"
        >
          {item}
        </Typography>
      ))}
    </Stack>
  );
}