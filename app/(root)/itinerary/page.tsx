"use client";

import ItineraryGrid from "@/components/ItinerariesGrid";
import ItineraryCard from "@/components/ItineraryCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const ItinerariesPage = () => {
  return (
    <>
      <ItineraryGrid />
    </>
  );
};

export default ItinerariesPage;
