"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import MDXEditor from "@/components/MDXEditor";
import { useQuery } from "convex/react";
import React from "react";

type ItineraryDetailPageProps = {
  params: {
    itineraryId: Id<"itineraries">;
  };
};

const ItineraryDetailPage = ({
  params: { itineraryId },
}: ItineraryDetailPageProps) => {
  const ItineraryDetail = useQuery(api.itinerary.getOne, { itineraryId });

  console.log("ItineraryDetail", ItineraryDetail);
  
  return (
    <div className="py-10 w-full px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4"> {ItineraryDetail?.destination} </h1>
      
      <div className="flex gap-3">
        <p>Days - {ItineraryDetail?.days} days </p>
        <p>Budget - $ {ItineraryDetail?.budget} </p>
      </div>

      {ItineraryDetail?.plan ? (
        <MDXEditor isPreview markdown={ItineraryDetail.plan} />
      ) : null}
    </div>
  );
};

export default ItineraryDetailPage;
