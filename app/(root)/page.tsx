"use client";

import HeroSection from "@/components/HeroSection";
import ItineraryGrid from "@/components/ItinerariesGrid";

export default function Home() {
  return (
    <div className="py-3 w-full h-full text-center">
      <HeroSection />

      <h2>Featured Trips</h2>
      <ItineraryGrid className="p-3" />
    </div>
  );
}
