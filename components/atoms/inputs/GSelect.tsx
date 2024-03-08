import { GInputType, GSelectType } from "@/types";
import React from "react";

export const GSelect = ({
  label,
  name,
  error = "",
  inputError,
  options,
  optionDefaultText,
}: GSelectType) => {
  return (
    <div className="my-4">
      <p className={`${inputError ? "text-red-600" : "text-[#344054]"}  mb-1`}>
        {label}
      </p>
      <span>
        <select
          name={name}
          className={`w-full px-4  outline-none focus:border-hgrey100 focus:border-2 py-3 rounded-lg border ${
            inputError ? "border-red-600" : "border-[#D0D5DD] bg-transparent"
          } `}
        >
          <option value="">{optionDefaultText}</option>
          {options.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.title}
              </option>
            );
          })}
        </select>
      </span>
      <div className="text-red-400">{inputError}</div>
    </div>
  );
};
