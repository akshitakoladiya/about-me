"use client";

import { useState } from "react";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { navigation } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scrollToSection";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
        onClick={() => setOpen(true)}
      >
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 280 }}>
          {navigation.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}