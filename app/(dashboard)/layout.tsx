import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <div>dashboard layout here</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
