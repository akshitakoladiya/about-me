"use client";

import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { Experience } from "@/data/portfolio";

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Card>
        <CardContent
          sx={{
            p: 4,
          }}
        >
          {/* Header */}

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
              >
                {experience.role}
              </Typography>

              <Typography
                variant="h6"
                color="primary"
                mt={1}
              >
                {experience.company}

                {experience.client &&
                  ` • ${experience.client}`}
              </Typography>
            </Box>

            <Stack spacing={1}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <CalendarMonthRoundedIcon
                  fontSize="small"
                />

                <Typography variant="body2">
                  {experience.start} – {experience.end}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <LocationOnRoundedIcon
                  fontSize="small"
                />

                <Typography variant="body2">
                  {experience.location}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <BusinessCenterRoundedIcon
                  fontSize="small"
                />

                <Typography variant="body2">
                  {experience.employmentType}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />
          {experience.summary.map((d, i) => {
            return (
              <Typography color="text.secondary" paragraph key={i}>
                {d}
              </Typography>
            )
          })}

          <Stack spacing={2}>
            {experience.achievements.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
              >
                <CheckCircleRoundedIcon
                  color="primary"
                  fontSize="small"
                />

                <Typography>{item}</Typography>
              </Stack>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            mt={4}
          >
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}