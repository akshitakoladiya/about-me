"use client";

import { Container, Stack } from "@mui/material";

import SectionTitle from "@/components/common/SectionTitle";

import { portfolio } from "@/data/portfolio";
import ExperienceCard from "./ExperienceCard";
import ContainerSection from "../common/ContainerSection";

export default function Experience() {
  const { experience } = portfolio;
  return (
    <ContainerSection
      id="experience"
      background="paper"
    >
      <SectionTitle
        overline="EXPERIENCE"
        title="Professional Journey"
        subtitle="Over 8 years of building enterprise software across Banking, Healthcare, Logistics and SaaS."
        align="center"
      />

      <Stack spacing={5}>
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            index={index}
          />
        ))}
      </Stack>
    </ContainerSection>
  );
}