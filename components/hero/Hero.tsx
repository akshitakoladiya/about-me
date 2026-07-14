"use client";

import { Box, Container, Grid } from "@mui/material";
import FloatingIcons from "./FloatingIcons";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import GradientBackground from "@/components/common/GradientBackground";

export default function   Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: {
          xs: 10,
          md: 16,
        },
      }}
    >
      <GradientBackground />
      <FloatingIcons />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <HeroContent />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <HeroStats />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}