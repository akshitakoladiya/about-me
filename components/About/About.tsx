"use client";

import { Container, Grid } from "@mui/material";

import SectionTitle from "@/components/common/SectionTitle";
import ContainerSection from "@/components/common/ContainerSection";
import Reveal from "@/components/common/Reveal";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <ContainerSection
      id="about"
      background="paper"
    >
      <Reveal>
        <SectionTitle
          overline="WHO AM I"
          title="Building software that solves real business problems."
        />
      </Reveal>

      <Grid
        container
        spacing={8}
        alignItems="center"
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <AboutImage />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <AboutContent />
        </Grid>
      </Grid>
    </ContainerSection>
  );
}