import { Molecules } from "@/components";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <Molecules.Navs.SideNav />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
