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

  return (
    <div className="py-10">
      {ItineraryDetail?.plan ? (
        <MDXEditor isPreview markdown={ItineraryDetail.plan} />
      ) : null}
    </div>
  );
};

export default ItineraryDetailPage;
