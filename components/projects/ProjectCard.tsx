"use client";

import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import { Project } from "@/data/projects";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";


interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
    >
      <Card sx={{
        overflow: "hidden",
        borderRadius: 2,
      }}>
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
          >
            {project.title}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            mb={4}
          >
            <Chip
              icon={<BusinessRoundedIcon />}
              label={project.company}
            />

            {project.client && (
              <Chip
                icon={<ApartmentRoundedIcon />}
                label={project.client}
              />
            )}

            <Chip
              color="primary"
              label={project.domain}
            />
          </Stack>


          {/* Challenge */}
          <Typography
            variant="h6"
            mb={1}
          >
            Challenge
          </Typography>

          <Typography
            color="text.secondary"
            paragraph
          >
            {project.challenge}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Solution */}
          <Typography
            variant="h6"
            mb={1}
          >
            Solution
          </Typography>

          <Typography
            color="text.secondary"
            paragraph
          >
            {project.solution}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Contributions */}

          <Typography
            variant="h6"
            mb={2}
          >
            Key Contributions
          </Typography>

          <Stack spacing={1}>
            {project.contributions.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <CheckCircleRoundedIcon
                  color="primary"
                  fontSize="small"
                />

                <Typography>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}