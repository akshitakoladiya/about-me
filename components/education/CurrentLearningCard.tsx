"use client";

import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

import { portfolioData } from "@/data/portfolio";

export default function CurrentLearningCard() {
  const { education } = portfolioData;
  const { currentLearnings } = education;

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 5,
        transition: "all .3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <RocketLaunchRoundedIcon
          color="primary"
          sx={{ fontSize: 36 }}
        />

        <Typography
          variant="h5"
          mt={2}
          mb={3}
          fontWeight={700}
        >
          Currently Learning
        </Typography>

        <List disablePadding>
          {currentLearnings.map((item) => (
            <ListItem
              key={item.title}
              disableGutters
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <ArrowRightRoundedIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}