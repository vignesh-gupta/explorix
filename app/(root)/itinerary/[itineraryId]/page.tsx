"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import MDXEditor from "@/components/MDXEditor";
import { useQuery } from "convex/react";
import React from "react";
import CoverImage from "@/components/CoverImage";

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
    <div className="py-10 w-full px-8 flex flex-col items-center">
      <CoverImage value={ItineraryDetail?.imgUrl} />

      <h1 className="text-4xl font-bold mb-4">
        {ItineraryDetail?.destination}
      </h1>

      <div className="flex gap-3">
        <p className="p-1 px-2 text-sm bg-primary-100 m-1 rounded-full">
          {ItineraryDetail?.days} days
        </p>
        <p className="p-1 px-2 text-sm bg-secondary-100 m-1 rounded-full">
          under $ {ItineraryDetail?.budget}
        </p>
      </div>

      {ItineraryDetail?.plan ? (
        <MDXEditor isPreview markdown={ItineraryDetail.plan} />
      ) : null}
    </div>
  );
};

export default ItineraryDetailPage;
