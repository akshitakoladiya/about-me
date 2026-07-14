import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { portfolio } from "@/data/portfolio";

export default function HeroButtons() {
  const {profile} = portfolio;
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      <motion.div
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          component="a"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          startIcon={<DownloadRoundedIcon />}
        >
          Download CV
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          component="a"
          href="#contact"
          variant="outlined"
          size="large"
          startIcon={<MailRoundedIcon />}
        >
          Contact Me
        </Button>
      </motion.div>
    </Stack>
  );
}