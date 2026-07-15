"use client";

import { Grid, Container, Divider } from "@mui/material";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterTech from "./FooterTech";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer>
      <Container
        maxWidth="xl"
        sx={{
          py: 10,
        }}
      >
        <Grid
          container
          spacing={6}
        >
          <Grid size={{ xs: 12, md: 3 }}>
            <FooterBrand />
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <FooterLinks />
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <FooterTech />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <FooterContact />
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <FooterSocial />
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <FooterBottom />
      </Container>
    </footer>
  );
}