"use client";

import { Container, Grid } from "@mui/material";

import SectionTitle from "@/components/common/SectionTitle";

import SkillCategory from "./SkillCategory";
import { portfolioData } from "@/data/portfolio";
import ContainerSection from "../common/ContainerSection";

export default function Skills() {
  const { skills } = portfolioData;
  return (
    <ContainerSection
      id="skills"
      background="default"
    >
      <SectionTitle
        overline="SKILLS"
        title="Technology Stack"
        subtitle="Technologies I use to build secure, scalable and high-performance enterprise applications."
        align="center"
      />

      <Grid container spacing={4}>
        {skills.map((category) => (
          <Grid
            key={category.title}
            size={{ xs: 12, md: 6 }}
          >
            <SkillCategory category={category} />
          </Grid>
        ))}
      </Grid>
    </ContainerSection>
  );
}