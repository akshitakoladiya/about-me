"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  color?: string;
  delay?: number;
}

export default function StatCard({
  value,
  label,
  suffix = "",
  prefix = "",
  icon,
  color = "primary.main",
  delay = 0,
}: StatCardProps) {
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
    >
      <Card
        sx={{
          height: "100%",
          transition: "0.35s",

          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <CardContent
          sx={{
            py: 4,
            textAlign: "center",
          }}
        >
          {icon && (
            <Box
              mb={2}
              color={color}
            >
              {icon}
            </Box>
          )}

          <Typography
            variant="h3"
            color={color}
            fontWeight={700}
          >
            <AnimatedCounter
              to={value}
              prefix={prefix}
              suffix={suffix}
            />
          </Typography>

          <Typography
            mt={1}
            color="text.secondary"
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}