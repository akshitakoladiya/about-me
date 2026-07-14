"use client";

import {
  Stack,
  Typography,
  Button,
} from "@mui/material";

import { navigation } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scrollToSection";

export default function FooterLinks() {
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        mb={1}
      >
        Navigation
      </Typography>

      {navigation.map((item) => (
        <Button
          key={item.id}
          color="inherit"
          onClick={() =>
            scrollToSection(item.id)
          }
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            p: 0,
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}