"use client";

import { Container, Box } from "@mui/material";
import { ReactNode } from "react";

interface ContainerSectionProps {
  id: string;
  children: ReactNode;
  maxWidth?: "lg" | "xl";
  background?: "default" | "paper";
}

export default function ContainerSection({
  id,
  children,
  maxWidth = "lg",
  background = "default",
}: ContainerSectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: {
          xs: 10,
          md: 14,
        },

        position: "relative",

        bgcolor:
          background === "paper"
            ? "background.paper"
            : "background.default",
      }}
    >
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
}