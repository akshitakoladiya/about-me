"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

interface FloatingIcon {
  icon: IconType;
  size: number;
  duration: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const icons: FloatingIcon[] = [
  { icon: SiReact, top: "12%", left: "8%", size: 42, duration: 8 },
  { icon: SiNextdotjs, top: "22%", right: "12%", size: 36, duration: 10 },
  { icon: SiTypescript, top: "58%", left: "5%", size: 34, duration: 7 },
  { icon: SiNodedotjs, top: "72%", right: "6%", size: 40, duration: 9 },
  { icon: SiGraphql, top: "40%", left: "48%", size: 36, duration: 11 },
  { icon: SiMongodb, top: "80%", left: "38%", size: 38, duration: 8 },
  { icon: SiDocker, top: "18%", left: "72%", size: 40, duration: 12 },
  // { icon: SiAmazonwebservices, top: "60%", right: "24%", size: 38, duration: 10 },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ icon: Icon, size, duration, top, left, right, bottom }, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top,
            left,
            right,
            bottom,
            color: "primary.main",
            opacity: 0.08,
            pointerEvents: "none",
            zIndex: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <motion.div
            animate={{
              y: [-15, 15, -15],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        </Box>
      ))}
    </>
  );
}