import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className=" grow flex flex-col items-center">{children}</main>
    </>
  );
};

export default RootLayout;
