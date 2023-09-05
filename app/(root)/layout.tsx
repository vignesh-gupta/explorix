import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className=" flex flex-col">{children}</main>;
    </>
  );
};

export default RootLayout;
