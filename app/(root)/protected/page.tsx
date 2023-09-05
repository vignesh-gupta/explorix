import { UserButton } from "@clerk/nextjs";
import React from "react";

const ProtectedPage = () => {
  return (
    <div>
      ProtectedPage
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;