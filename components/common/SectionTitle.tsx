"use client";

import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <Box
      sx={{
        mb: 8,
        textAlign: align,
      }}
    >
      {overline && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            sx={{
              letterSpacing: 3,
            }}
          >
            {overline}
          </Typography>
        </motion.div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: 1,
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {subtitle && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 700,
              mx: align === "center" ? "auto" : 0,
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
}