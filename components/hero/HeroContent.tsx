"use client";

import { motion } from "framer-motion";

import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import HeroButtons from "./HeroButtons";
import { portfolioData } from "@/data/portfolio";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HeroContent() {
  const { profile } = portfolioData;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Greeting */}

      <motion.div variants={itemVariants}>
        <Typography
          color="primary"
          fontWeight={600}
          mb={2}
        >
          Hello 👋 Welcome to my portfolio
        </Typography>
      </motion.div>

      {/* Name */}

      <motion.div variants={itemVariants}>
        <Typography
          variant="h1"
          sx={{
            mb: 2,
          }}
        >
          {profile.name}
        </Typography>
      </motion.div>

      {/* Title */}

      <motion.div variants={itemVariants}>
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            mb: 4,
          }}
        >
          {profile.designation}
        </Typography>
      </motion.div>

      {/* Badges */}

      <motion.div variants={itemVariants}>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          mb={4}
        >
          <Chip
            color="primary"
            icon={<LocationOnRoundedIcon />}
            label={profile.location}
          />

          <Chip
            color="success"
            icon={<WorkRoundedIcon />}
            label="Open to Opportunities"
          />
        </Stack>
      </motion.div>

      {/* Description */}

      <motion.div variants={itemVariants}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 650,
            mb: 5,
          }}
        >
          {profile.description}
        </Typography>
      </motion.div>

      {/* Buttons */}

      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>

      {/* Tech Stack */}

      <motion.div variants={itemVariants}>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          mt={6}
        >
          {profile.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
            />
          ))}
        </Stack>
      </motion.div>
    </motion.div>
  );
}