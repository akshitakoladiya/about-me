"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { portfolioData } from "@/data/portfolio";

interface MenuItem {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  menus: MenuItem[];
}

export default function MobileDrawer({
  open,
  onClose,
  menus,
}: MobileDrawerProps) {
  const { profile } = portfolioData;
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 320,
          bgcolor: "background.paper",
          backdropFilter: "blur(20px)",
          borderLeft: 1,
          borderColor: "divider",
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}

        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Akshita
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Senior Full Stack Developer
          </Typography>
        </Box>

        <Divider />

        {/* Navigation */}

        <List sx={{ py: 2 }}>
          {menus.map((item) => (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              onClick={onClose}
              sx={{
                py: 1.5,
                px: 3,
                borderRadius: 2,
                mx: 2,
                mb: 1,

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>

        <Box flexGrow={1} />

        <Divider />

        {/* Footer */}

        <Stack
          spacing={2}
          p={3}
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<DownloadRoundedIcon />}
          >
            Download CV
          </Button>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              href={profile.github}
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>

            <Button
              href={profile.linkedin}
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
}