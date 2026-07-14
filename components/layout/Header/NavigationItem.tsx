"use client";

import { Button } from "@mui/material";
import { scrollToSection } from "@/utils/scrollToSection";

interface Props {
  id: string;
  label: string;
}

export default function NavigationItem({
  id,
  label,
}: Props) {
  return (
    <Button
      color="inherit"
      onClick={() => scrollToSection(id)}
      sx={{
        fontWeight: 500,
        textTransform: "none",
      }}
    >
      {label}
    </Button>
  );
}