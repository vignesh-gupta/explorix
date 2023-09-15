import Image from "next/image";
import React from "react";
import hero from "../public/hero.jpg";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:h-[calc(100vh-5rem)] h-full  gap-4">
      <div className="grow p-4 hidden md:block">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <Image
            src={hero}
            placeholder="blur"
            fill
            alt="hero"
            className="w-full hover:scale-125 transition-all duration-150 h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="grow min-h-[60vh] p-4 overflow-hidden">
        <div className="rounded-3xl bg-[url(/hero.jpg)] md:bg-none overflow-hidden bg-center bg-cover h-full p-10 md:p-0">
          <div className="bg-background bg-opacity-50  flex justify-center items-center h-full rounded-lg text-center">
            <h1>Let&apos;s travel the world</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
