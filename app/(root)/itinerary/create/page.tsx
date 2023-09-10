import React from "react";
import MDXEditor from "@/components/MDXEditor";

const ItineraryCreate = () => {
  return (
    <div className="w-full h-full p-10 md:max-w-5xl">
      <h1 className="text-3xl font-semibold mb-3">
        Create your own Itinerary plan
      </h1>
      <MDXEditor />
    </div>
  );
};

export default ItineraryCreate;
