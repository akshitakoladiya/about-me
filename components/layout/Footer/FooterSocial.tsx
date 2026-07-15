"use client";

import { IconButton, Stack, Typography } from "@mui/material";

import { socialLinks } from "@/data/socials";

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
        {
          socialLinks.map((social) => (
            <IconButton
              key={social.name}
              component="a"
              target="_blank"
              href={social.url}
            >
              <social.icon />
            </IconButton>
          ))
        }
      </Stack>
    </Stack>
  );
}