import { Box, Button, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { heroSection } from "@/commonTypes";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.25, delayChildren: 1 },
  },
};
const introChildren = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.1, type: "spring" } },
};
const HeroSection = ({ sx, upperText, title, buttonText }: heroSection) => {
  return (
    <Box>
      <motion.div variants={intro} initial="hidden" animate="visible">
        <Stack
          sx={{ ...sx }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          spacing="48px"
          height="90vh"
        >
          <motion.div variants={introChildren}>
            {upperText && (
              <Typography fontSize={{ md: "16px", sm: "14px", xs: "12px" }}>
                {upperText}
              </Typography>
            )}
          </motion.div>

          <motion.div variants={introChildren}>
            {title && (
              <Typography
                fontSize={{ md: "64px", sm: "45px", xs: "32px" }}
                fontWeight="bold"
                maxWidth="696px"
                padding={{ xs: "20px", md: "0px" }}
                textAlign="center"
              >
                {title}
              </Typography>
            )}
          </motion.div>

          <motion.div variants={introChildren}>
            {buttonText && (
              <Button variant="contained" color="primary">
                <SearchIcon /> {buttonText}
              </Button>
            )}
          </motion.div>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
