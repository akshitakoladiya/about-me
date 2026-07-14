"use client";

import { Card, CardContent, Stack, Typography } from "@mui/material";
import SkillChip from "./SkillChip";
import { SkillCategory as SkillCategoryType } from "@/data/portfolio"

interface Props {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: Props) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h5"
          mb={3}
        >
          {category.title}
        </Typography>

        <Stack spacing={2}>
          {category.skills.map((skill) => (
            <SkillChip
              key={skill.name}
              {...skill}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}