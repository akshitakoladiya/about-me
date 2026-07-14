"use client";

import { ReactNode } from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function InfoCard({
  title,
  icon,
  children,
}: InfoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,

          transition: "all .3s",

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 8,
          },
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Box
            sx={{
              color: "primary.main",
              display: "inline-flex",
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h5"
            mt={2}
            mb={3}
            fontWeight={700}
          >
            {title}
          </Typography>

          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}