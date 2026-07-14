"use client";

import Image from "next/image";

import { Box } from "@mui/material";

import ExperienceBadge from "./ExperienceBadge";
import TechOrbit from "./TechOrbit";

export default function AboutImage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 360,
        mx: "auto",
      }}
    >
      {/* Gradient Glow */}

      <Box
        sx={{
          position: "absolute",
          inset: -40,
          borderRadius: "50%",
          background: "radial-gradient(circle,#3B82F650 0%,transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <TechOrbit />

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          border: 1,
          borderColor: "divider",
          // zIndex: 1,
        }}
      >
        <Image
          src="/images/profile.png"
          alt="Akshita Koladiya"
          width={400}
          height={500}
          priority
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      <ExperienceBadge />
    </Box>
  );
}