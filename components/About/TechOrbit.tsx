"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiGraphql,
} from "react-icons/si";

const technologies = [
    { Icon: SiReact, top: "10%", left: "-8%", },
    { Icon: SiNextdotjs, top: "20%", right: "-8%", },
    { Icon: SiNodedotjs, bottom: "20%", left: "-10%", },
    { Icon: SiGraphql, bottom: "35%", right: "-10%", },
];

export default function TechOrbit() {
    return (
        <>
            {technologies.map(({ Icon, ...position }, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [-6, 6, -6],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + index,
                    }}
                    style={{
                        position: "absolute",
                        ...position,
                    }}
                >
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            bgcolor: "background.paper",
                            border: 1,
                            borderColor: "divider",
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            color: "primary.main",
                            backdropFilter: "blur(12px)",
                            boxShadow: 2,
                        }}
                    >
                        <Icon size={24} />
                    </Box>
                </motion.div>
            ))}
        </>
    );
}