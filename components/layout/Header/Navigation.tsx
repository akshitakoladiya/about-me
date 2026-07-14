"use client";

import { Stack } from "@mui/material";

import NavigationItem from "./NavigationItem";

import { navigation } from "@/data/portfolio";

export default function Navigation() {
  return (
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
      {navigation.map((item) => (
        <NavigationItem
          key={item.id}
          {...item}
        />
      ))}
    </Stack>
  );
}