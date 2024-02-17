
import { SideNav } from "@/components/molecules/nav";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
     <SideNav />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
