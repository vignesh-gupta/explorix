import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className=" flex justify-center items-center">{children}</main>;
};

export default AuthLayout;