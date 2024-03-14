import { MoneyFormat } from "@/utils/moneyFormat";
import React from "react";

export const PatternCard = ({
  label,
  moneyValue,
  loaded = true,
}: {
  label: string;
  moneyValue: string;
  loaded: boolean;
}) => {
  return (
    <div className="cardBg w-full rounded-lg px-8 h-[200px] flex justify-center flex-col">
      {loaded ? (
        <div>
          <p className="text-[#E6E6F3] font-robotoCondensed text-[20px]">
            {label.toUpperCase()}
          </p>
          <p className="mt-4 text-4xl text-white font-semibold">
            {MoneyFormat(moneyValue) ?? "0"}
          </p>
        </div>
      ) : (
        <span className="text-white text-center">Loading...</span>
      )}
    </div>
  );
};
