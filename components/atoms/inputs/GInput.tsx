import { GInputType } from "@/types";
import React from "react";

export const GInput = ({
  label,
  placeholer,
  type,
  name,
  error = "",
}: GInputType) => {
  return (
    <div className="my-4">
      <p className="text-[#344054] mb-2">{label}</p>
      <span>
        <input
          name={name}
          className={`w-full px-4 py-2 rounded-lg border  border-[#D0D5DD]`}
        />
      </span>
      <div className="text-red-400">{error}</div>
    </div>
  );
};
