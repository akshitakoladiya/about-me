"use client";

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNav";

export default function Header() {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: scrolled
          ? "blur(20px)"
          : "blur(8px)",

        backgroundColor: scrolled
          ? "rgba(9,9,11,.75)"
          : "transparent",

        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,.08)"
          : "none",

        transition: "all .3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: scrolled ? 68 : 84,

            transition: "all .3s ease",

            justifyContent: "space-between",
          }}
        >
          <Logo />

          <Navigation />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <HeaderActions />

            <MobileNavigation />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}