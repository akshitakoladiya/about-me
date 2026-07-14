"use client";

import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Logo() {
  return (
    <Link
      href="/"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <MotionBox
          whileHover={{
            rotate: -8,
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          sx={{
            width: 48,
            height: 48,
            borderRadius: 3,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            background:
              "linear-gradient(135deg,#2563EB,#7C3AED)",

            color: "#fff",

            fontWeight: 700,
            fontSize: 20,

            boxShadow:
              "0 10px 30px rgba(37,99,235,.35)",
          }}
        >
          AK
        </MotionBox>

        {/* <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={18}
          >
            Akshita Koladiya
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Senior Full Stack Developer
          </Typography>
        </Box> */}
      </Stack>
    </Link>
  );
}