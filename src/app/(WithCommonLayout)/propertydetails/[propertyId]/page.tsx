"use client";
import Loading from "@/Loading/LoadingRound";
import OtherServices from "@/components/UI/HomePage/OtherServices/OtherServices";
import Amenities from "@/components/UI/PropertyDetailsPage/Amenities/Amenities";
import ImageAndOverView from "@/components/UI/PropertyDetailsPage/ImageAndValue/ImageAndOverView";
import NearbyProperty from "@/components/UI/PropertyDetailsPage/NearbyPoperty/NearbyProperty";
import { useGetSinglePropertyQuery } from "@/redux/api/propertiesApi";

import React from "react";

const PropertyDetailsPage = () => {
  return (
    <div className="lg:px-[112px] px-20 py-40">
      <ImageAndOverView />
      <Amenities />
      <OtherServices />
      <NearbyProperty />
    </div>
  );
};

export default PropertyDetailsPage;
