"use client";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import OtherServices from "@/components/UI/HomePage/OtherServices/OtherServices";
import VisualRepresentSection from "@/components/UI/HomePage/VisualRepresentSection/VisualRepresentSection";
import { useAppSelector } from "@/redux/hooks";
import { toogleThemes } from "@/redux/themeSlice/themeSlice";
import { Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  const darkMode = useAppSelector(toogleThemes);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#3C0753]" : "text-black bg-white"
      }`}
    >
      <HeroSection
        sx={{
          height: "560px",
          width: "100%",
          backgroundImage: `url("https://legal.thomsonreuters.com/content/dam/ewp-m/images/legal/en/artworked-images/180282_64862023-cropped-black-overlay.jpg.transform/hero-m/q90/image.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        upperText="Seamlessly connecting you to the heartbeat of Indias prime properties."
        title="Your Portal to India's Exquisite Real Estate"
        buttonText="Find Property"
      />
      <div className="my-[77px]">
        <VisualRepresentSection />
        <div className="mt-40 pb-40">
          <OtherServices />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
