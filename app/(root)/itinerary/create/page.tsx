import React from "react";
import MDXEditor from "@/components/tailwind-exclude/MDXEditor";

const ItineraryCreate = () => {
  return (
    <div className="w-full h-full p-10">
      <h1 className="text-3xl font-semibold mb-3">Create your own Itinerary plan</h1>
      <MDXEditor />
    </div>
  );
};

export default ItineraryCreate;
