import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import image1 from "@/assets/homePageImages/firstSeg-1.png";
import image2 from "../../../../assets/homePageImages/firstSeg-2.png";
import image3 from "../../../../assets/homePageImages/secondSeg-1.png";
import image4 from "../../../../assets/homePageImages/secondSeg-2.png";
import image5 from "../../../../assets/homePageImages/thirdSeg-1.png";
import image6 from "../../../../assets/homePageImages/thirdSeg-2.png";
import player from "../../../../assets/homePageImages/playerIcon.png";
import { useAppSelector } from "@/redux/hooks";

const visualSection = [
  {
    upperText: "Property buying",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    firstImage: image1,
    secondImage: image2,
    thirdImage: player,
  },
  {
    upperText: "Property buying",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    firstImage: image3,
    secondImage: image4,
    thirdImage: player,
  },
  {
    upperText: "Property buying",
    title: "Efficient and Transparent Home Buying Solutions",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    firstImage: image5,
    secondImage: image6,
    thirdImage: player,
  },
];

const VisualRepresentSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingX: { md: "112px", sm: "20px", sx: "20px" },
        marginTop: "77px",
      }}
    >
      {visualSection.map((visual, index) => (
        <Stack
          key={index}
          direction={`${index === 1 ? "row-reverse" : "row"}`}
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          justifyContent="space-between"
          spacing={3}
          alignItems={`${index === 1 ? "flex-end" : "flex-start"}`}
          marginY="80px"
        >
          <Box maxWidth="442px">
            <Box>
              <Box>
                <Image
                  src={visual.firstImage}
                  height={400}
                  width={458}
                  alt="alt"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: `${
                    index === 0 ? "200px" : index === 1 ? "350px" : "1140px"
                  }`,
                  left: `${
                    index === 0 ? "180px" : index === 1 ? "1060px" : "180px"
                  }`,
                }}
              >
                <Image
                  src={visual.secondImage}
                  height={240}
                  width={452}
                  alt="alt"
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: `${
                    index === 0 ? "220px" : index === 1 ? "430px" : "1160px"
                  }`,
                  left: `${
                    index === 0 ? "520px" : index === 1 ? "1050px" : "520px"
                  }`,
                }}
              >
                <Image
                  src={visual.thirdImage}
                  height={72}
                  width={72}
                  alt="alt"
                />
              </Box>
            </Box>
          </Box>
          <Box
            maxWidth="592px"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <Typography fontSize="18px" color="#F06711" fontWeight={600}>
              <span className="line-through h-20">Prope</span>rty buying
            </Typography>
            <Typography
              fontSize="40px"
              fontWeight={700}
              sx={{ fontWeight: "bold" }}
            >
              {visual.title}
            </Typography>
            <Typography fontSize="16px" color="#667085" marginTop="8px">
              {visual.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                color: "primary.main",
                marginTop: "24px",
              }}
            >
              <SearchIcon /> Find Property
            </Button>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default VisualRepresentSection;
