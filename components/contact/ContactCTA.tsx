"use client";

import {
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

import { motion } from "framer-motion";

import ContainerSection from "@/components/common/ContainerSection";
import { portfolio } from "@/data/portfolio";

export default function ContactCTA() {
    const { profile } = portfolio
    return (
        <ContainerSection
            id="contact"
            background="paper"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: 6,
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: "divider",
                        background:
                            "linear-gradient(145deg, rgba(37,99,235,.08), rgba(124,58,237,.08))",
                    }}
                >
                    {/* Background Glow */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(circle at top right, rgba(37,99,235,.18), transparent 55%)",
                            pointerEvents: "none",
                        }}
                    />

                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={700}
                    >
                        CONTACT
                    </Typography>

                    <Typography
                        variant="h2"
                        mt={2}
                        fontWeight={800}
                    >
                        Let's Build Something Great Together
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            maxWidth: 720,
                            mx: "auto",
                            mt: 3,
                            lineHeight: 1.8,
                        }}
                    >
                        I'm passionate about building scalable enterprise
                        applications using React, Next.js, Node.js and
                        TypeScript. If you're looking for a developer who enjoys
                        solving complex business problems, I'd love to connect.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={1.5}
                        justifyContent="center"
                        useFlexGap
                        flexWrap="wrap"
                        mt={5}
                    >
                        <Chip
                            icon={<LocationOnRoundedIcon />}
                            label="Stuttgart, Germany"
                        />

                        <Chip
                            color="success"
                            icon={<WorkRoundedIcon />}
                            label="Open to Work"
                        />

                        <Chip
                            icon={<LanguageRoundedIcon />}
                            label="English • German (Learning)"
                        />
                    </Stack>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={2}
                        justifyContent="center"
                        mt={6}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<EmailRoundedIcon />}
                            href={`mailto:${profile.email}`}
                            sx={{
                                px: 4,
                                py: 1.5,
                            }}
                        >
                            Email Me
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<DownloadRoundedIcon />}
                            href={profile.resume}
                            target="_blank"
                            sx={{
                                px: 4,
                                py: 1.5,
                            }}
                        >
                            Download Resume
                        </Button>

                        <Button
                            variant="text"
                            size="large"
                            startIcon={<LinkedInIcon />}
                            href={profile.linkedin}
                            target="_blank"
                        >
                            LinkedIn
                        </Button>
                    </Stack>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                        mt={6}
                    >
                        {[
                            "Full-Time",
                            "Hybrid",
                            "Remote",
                            "Relocation",
                        ].map((item) => (
                            <Chip
                                key={item}
                                color="primary"
                                variant="outlined"
                                label={item}
                            />
                        ))}
                    </Stack>
                </Paper>
            </motion.div>
        </ContainerSection>
    );
}