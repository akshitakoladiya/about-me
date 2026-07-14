"use client";

import { Stack, Typography } from "@mui/material";
import { portfolio } from "@/data/portfolio";

export default function FooterContact() {
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        mb={1}
      >
        Contact
      </Typography>

      <Typography color="text.secondary">
        {portfolio.profile.email}
      </Typography>

      <Typography color="text.secondary">
        {portfolio.profile.location}
      </Typography>

      <Typography color="primary">
        Open to Work
      </Typography>
    </Stack>
  );
}