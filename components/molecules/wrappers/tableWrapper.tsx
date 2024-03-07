import React from "react";

export const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-4 pt-3 border px-2 border-[#F2F4F7] rounded-lg">{children}</div>
  );
};
