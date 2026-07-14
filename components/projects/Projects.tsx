"use client";

import { Container, Stack } from "@mui/material";

import SectionTitle from "@/components/common/SectionTitle";

import { portfolio } from "@/data/portfolio";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ContainerSection from "../common/ContainerSection";

export default function Projects() {
    const { projects } = portfolio;
    return (
        <ContainerSection
            id="projects"
            background="default"
        >
            <SectionTitle
                overline="PROJECTS"
                title="Featured Work"
                subtitle="Enterprise applications I've designed and developed across Banking, Healthcare and Logistics."
                align="center"
            />

            <Stack spacing={6}>
                {projects.map((project) =>
                    project.featured ? (
                        <FeaturedProject
                            key={project.id}
                            project={project}
                        />
                    ) : (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    )
                )}
            </Stack>
        </ContainerSection>
    );
}