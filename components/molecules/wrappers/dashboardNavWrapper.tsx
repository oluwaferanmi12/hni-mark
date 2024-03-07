import { DashBoardNavType } from "@/types";
import Image from "next/image";
import React from "react";
import roundedAdd from "@/public/assets/svgs/roundedAdd.svg";

export const DashboardNavWrapper = ({
  headerText,
  extraText,
  button,
}: DashBoardNavType) => {
  return (
    <>
      <div className=" bg-hblue800 navBg bg-dashboardBackground w-full min-w-full h-[150px] flex items-center justify-between px-6">
        <div>
          <p className="text-3xl text-white mb-2 font-robotoCondensed">
            {headerText}
          </p>
          <p className="text-[#E9EBF8] font-roboto">{extraText}</p>
        </div>

        <div>{button}</div>
      </div>
    </>
  );
};
