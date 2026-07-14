"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";

import { Project } from "@/data/portfolio";

interface Props {
  project: Project;
}

export default function FeaturedProject({
  project,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Card
        sx={{
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <Grid container>
          {/* Image */}

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: "100%"
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
              />
            </Box>
          </Grid>

          {/* Content */}

          <Grid size={{ xs: 12, md: 7 }}>
            <CardContent
              sx={{
                p: 5,
              }}
            >
              <Typography
                variant="h3"
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

              {/* Technologies */}

              <Typography
                variant="h6"
                mb={2}
              >
                Tech Stack
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
              >
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </motion.div>
  );
}