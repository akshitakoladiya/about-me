"use client";

import { Chip, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  name: string;
  icon: React.ElementType;
  level: string;
}

export default function SkillChip({
  name,
  icon: Icon,
  level,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
    >
      <Chip
        icon={<Icon size={18} />}
        label={
          <Stack direction="column" spacing={0}>
            <Typography fontSize={14}>{name}</Typography>
            <Typography
              fontSize={11}
              color="text.secondary"
            >
              {level}
            </Typography>
          </Stack>
        }
        sx={{
          py: 3,
          px: 1,
          width: "100%",
          justifyContent: "flex-start",
        }}
      />
    </motion.div>
  );
}