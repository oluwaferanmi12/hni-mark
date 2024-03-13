import React from "react";

export const PatternCard = ({
  label,
  moneyValue,
}: {
  label: string;
  moneyValue: string;
}) => {
  return (
    <div className="cardBg w-full rounded-lg px-8 h-[200px] flex justify-center flex-col">
      <p className="text-[#E6E6F3] font-robotoCondensed text-[20px]">
        {label.toUpperCase()}
      </p>
      <p className="mt-4 text-4xl text-white font-semibold">
        {moneyValue ? moneyValue : ""}
      </p>
    </div>
  );
};
