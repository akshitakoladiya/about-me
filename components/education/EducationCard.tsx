"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import { portfolio } from "@/data/portfolio";

export default function EducationCard() {
    const { education } = portfolio;
    const { degrees } = education;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <Card>
        {degrees.map((degree) => (
          <CardContent>
            <SchoolRoundedIcon color="primary" />
            <Typography variant="h5" mt={2}> Education </Typography>
            <Typography variant="h6"> {degree.degree} </Typography>
            <Typography color="primary"> {degree.institution} </Typography>
            <Typography color="text.secondary"> {degree.duration} </Typography>
            <Typography color="text.secondary"> {degree.location} </Typography>
            <Typography mt={2}>   {degree.description} </Typography>
          </CardContent>
        ))}
      </Card>
    </motion.div>
  );
}