import React from "react";
import ItineraryCard from "./ItineraryCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import clsx from "clsx";

type ItineraryGridProps = {
  className?: string;
};

const ItineraryGrid = ({ className }: ItineraryGridProps) => {
  const itineraries = useQuery(api.itinerary.get);

  if (!itineraries) return <div>Loading...</div>;

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-5 p-10 place-content-center sm:grid-cols-2 md:grid-cols-3 ",
        className
      )}
    >
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

export default ItineraryGrid;
