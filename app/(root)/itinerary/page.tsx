"use client";

import ItineraryCard from "@/components/ItineraryCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const ItinerariesPage = () => {
  const itineraries = useQuery(api.itinerary.get);

  return (
    <div className="grid grid-cols-1 gap-5 p-10 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {itineraries?.map((itinerary) => (
        <ItineraryCard
          id={itinerary._id}
          duration={itinerary.days}
          imgUrl={itinerary.imgUrl}
          budget={itinerary.budget}
          destination={itinerary.destination}
          key={itinerary._id}
        />
      ))}
    </div>
  );
};

export default ItinerariesPage;
