"use client";

import ItineraryCard from "@/components/ItineraryCard";
import React from "react";

const ItinerariesPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ItineraryCard />
    </div>
  );
};

export default ItinerariesPage;
