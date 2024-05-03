import { Box, Button, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { heroSection } from "@/commonTypes";

const HeroSection = ({ sx, upperText, title, buttonText }: heroSection) => {
  return (
    <Box>
      <Stack
        sx={{ ...sx }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        spacing="48px"
        height="90vh"
      >
        {upperText && (
          <Typography fontSize={{ md: "16px", sm: "14px", xs: "12px" }}>
            {upperText}
          </Typography>
        )}

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

        {buttonText && (
          <Button variant="contained" color="primary">
            <SearchIcon /> {buttonText}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default HeroSection;
