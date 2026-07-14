"use client";

import Link from "next/link";
import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import ThemeToggle from "@/components/common/ThemeToggle";
import MobileDrawer from "./MobileDrawer";

const menus = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: 80,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
            >
              AK
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              {menus.map((menu) => (
                <Button
                  key={menu.href}
                  component={Link}
                  href={menu.href}
                  color="inherit"
                >
                  {menu.label}
                </Button>
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <ThemeToggle />

              <IconButton
                sx={{
                  display: {
                    md: "none",
                  },
                }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        menus={menus}
      />
    </>
  );
}