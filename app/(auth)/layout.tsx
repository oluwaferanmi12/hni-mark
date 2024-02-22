import { AuthPageWrapper } from "@/components/molecules/wrappers";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen">
      <AuthPageWrapper />
      {children}
    </div>
  );
};

export default AuthLayout;
