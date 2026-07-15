"use client";

import {
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

import { portfolioData } from "@/data/portfolio";

export default function LanguageCard() {
    const { education } = portfolioData;
    const { languages } = education;
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
                <LanguageRoundedIcon
                    color="primary"
                    sx={{ fontSize: 36 }}
                />

                <Typography
                    variant="h5"
                    mt={2}
                    mb={3}
                    fontWeight={700}
                >
                    Languages
                </Typography>

                <Stack spacing={2}>
                    {languages.map((language) => (
                        <Stack
                            key={language.name}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography fontWeight={500}>
                                {language.name}
                            </Typography>

                            <Chip
                                label={language.level}
                                color="primary"
                                variant="outlined"
                                size="small"
                            />
                        </Stack>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}