"use client";

import { motion } from "framer-motion";

import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

const domains = [
  // "Banking",
  // "Healthcare",
  // "Logistics",
  // "ERP",
  // "CRM",
  "⚙️ SaaS",
  "🏦 Banking & FinTech",
  "💳 Digital Payments",
  "📈 Marketing Automation",
  "🤝 CRM & Customer Engagement",
  // "🏢 Enterprise Collaboration",
  "🏥 Healthcare",
  "🚚 Logistics & Supply Chain",
  "📦 ERP & Business Management",
  "📊 Dashboards & Business Intelligence",
  // "🎥 Real-Time Communication",
  // "🔐 Authentication & Security",
  // "⚙️ Workflow Automation",
];

export default function AboutContent() {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
        >
          I'm a Senior Full Stack Developer with more than 8 years of
          experience designing, developing, and maintaining enterprise
          applications using React, React Native, Next.js, Node.js, GraphQL,
          TypeScript, Firebase and MongoDB.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
        >
          Throughout my career I've delivered solutions for banking,
          healthcare, logistics, ERP, and real-time collaboration
          platforms. I enjoy transforming complex business requirements
          into intuitive, scalable, and high-performance software.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Currently based in Germany, I'm looking for opportunities
          where I can contribute to modern engineering teams while
          continuing to grow as a software architect.
        </Typography>
      </motion.div>

      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        mt={4}
      >
        {domains.map((domain) => (
          <Chip
            key={domain}
            label={domain}
            color="primary"
            variant="outlined"
          />
        ))}
      </Stack>
    </Box>
  );
}