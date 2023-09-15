import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className=" grow flex flex-col items-center max-w-[1024px] w-full">{children}</main>

      <Footer />
    </>
  );
};

export default RootLayout;
