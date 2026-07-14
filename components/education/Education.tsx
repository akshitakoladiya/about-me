"use client";

import {
    Grid,
    Chip,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

import ContainerSection from "@/components/common/ContainerSection";
import SectionTitle from "@/components/common/SectionTitle";
import InfoCard from "./InfoCard";

import { portfolio } from "@/data/portfolio";

export default function Education() {
    const { education } = portfolio;
    const {
        degrees,
        languages,
        currentLearnings,
        certifications
    } = education;
    return (
        <ContainerSection
            id="education"
            background="paper"
        >
            <SectionTitle
                overline="EDUCATION"
                title="Education & Professional Development"
                subtitle="Continuous learning has always been an important part of my software engineering journey."
                align="center"
            />

            <Grid container spacing={4}>
                {/* Education */}

                <Grid size={{ xs: 12, md: 6 }}>
                    {degrees.map((degree) => (
                        <InfoCard
                            key={degree.id}
                            title="Education"
                            icon={<SchoolRoundedIcon fontSize="large" />}
                        >
                            <Typography variant="h6"> {degree.degree} </Typography>
                            <Typography color="primary"> {degree.institution} </Typography>
                            <Typography color="text.secondary"> {degree.duration} </Typography>
                            <Typography color="text.secondary"> {degree.location} </Typography>
                            <Typography mt={2}> {degree.description} </Typography>
                        </InfoCard>
                    ))}
                </Grid>

                {/* Languages */}

                <Grid size={{ xs: 12, md: 6 }}>
                    <InfoCard
                        title="Languages"
                        icon={<LanguageRoundedIcon fontSize="large" />}
                    >
                        <Stack spacing={2}>
                            {languages.map((language) => (
                                <Stack
                                    key={language.name}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography>
                                        {language.name}
                                    </Typography>

                                    <Chip
                                        label={language.level}
                                        color="primary"
                                        variant="outlined"
                                    />
                                </Stack>
                            ))}
                        </Stack>
                    </InfoCard>
                </Grid>

                {/* certifications */}

                <Grid size={{ xs: 12, md: 6 }}>
                    <InfoCard
                        title="Certifications"
                        icon={<MenuBookRoundedIcon fontSize="large" />}
                    >
                        <List disablePadding>
                            {certifications.map((item) => (
                                <ListItem
                                    key={item.title}
                                    disableGutters
                                >
                                    <ListItemText primary={item.title} secondary={item.issuer} />
                                    <ListItemText primary={''} secondary={item.year} style={{
                                        textAlign: 'right'
                                    }} />
                                </ListItem>
                            ))}
                        </List>
                    </InfoCard>
                </Grid>

                {/* Currently Learning */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <InfoCard
                        title="Currently Learning"
                        icon={<RocketLaunchRoundedIcon fontSize="large" />}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            flexWrap="wrap"
                        >
                            {currentLearnings.map((item) => (
                                <Chip
                                    key={item.title}
                                    label={item.title}
                                    color="secondary"
                                />
                            ))}
                        </Stack>
                    </InfoCard>
                </Grid>
            </Grid>
        </ContainerSection>
    );
}