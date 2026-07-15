"use client";

import { Button } from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { portfolioData } from "@/data/portfolio";

export default function ResumeButton() {
  return (
    <Button
      variant="contained"
      href={portfolioData.profile.resume}
      component="a"
      target="_blank"
      startIcon={<DownloadRoundedIcon />}
      sx={{
        borderRadius: 999,
        px: 2.5,
      }}
    >
      Resume
    </Button>
  );
}