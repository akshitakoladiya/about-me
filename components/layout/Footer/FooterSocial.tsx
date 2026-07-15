"use client";

import { IconButton, Stack, Typography } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import { portfolioData } from "@/data/portfolio";

export default function FooterSocial() {
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        mb={1}
      >
        Connect
      </Typography>

      <Stack direction="row">
        <IconButton
          component="a"
          href={portfolio.profile.github}
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href={portfolio.profile.linkedin}
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href={portfolio.profile.resume}
          target="_blank"
        >
          <DescriptionRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}