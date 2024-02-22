import { DashBoardNavType } from "@/types";
import React from "react";

export const DashboardNavWrapper = ({
  headerText,
  extraText,
  button,
}: DashBoardNavType) => {
  return (
    <>
      <div className="bg-hblue500 bg-dashboardBackground w-full min-w-full h-[150px] flex items-center justify-between px-6">
        <div>
          <p className="text-3xl text-white mb-2 font-robotoCondensed">{headerText}</p>
          <p className="text-[#E9EBF8] font-roboto">{extraText}</p>
        </div>

        <div>{button}</div>
      </div>
    </>
  );
};
