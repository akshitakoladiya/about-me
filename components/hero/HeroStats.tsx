"use client";

import { Grid } from "@mui/material";

import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import StatCard from "@/components/common/StatCard";

const statistics = [
  {
    value: 8,
    suffix: "+",
    label: "Years Experience",
    icon: <WorkHistoryRoundedIcon fontSize="large" />,
  },
  {
    value: 6,
    suffix: "+",
    label: "Enterprise Projects",
    icon: <BusinessCenterRoundedIcon fontSize="large" />,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Orders / Day",
    icon: <LocalShippingRoundedIcon fontSize="large" />,
  },
  {
    value: 450,
    suffix: "+",
    label: "Healthcare Workflows",
    icon: <FavoriteRoundedIcon fontSize="large" />,
  },
];

export default function HeroStats() {
  return (
    <Grid
      container
      spacing={3}
    >
      {statistics.map((item, index) => (
        <Grid
          key={item.label}
          size={{ xs: 6 }}
        >
          <StatCard
            value={item.value}
            suffix={item.suffix}
            label={item.label}
            icon={item.icon}
            delay={index * 0.15}
          />
        </Grid>
      ))}
    </Grid>
  );
}