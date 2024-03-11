import React from "react";

export const PatternCard = ({
  label,
  moneyValue,
}: {
  label: string;
  moneyValue: string;
}) => {
  return (
    <div className="cardBg w-full rounded-lg py-8 px-4">
      <p>{label}</p>
      <p className="mt-4">{moneyValue}</p>
    </div>
  );
};
