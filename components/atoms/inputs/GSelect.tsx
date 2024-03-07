import { GInputType } from "@/types";
import React from "react";

export const GSelect = ({
  label,
  placeholder,
  type = "text",
  name,
  error = "",
  inputError,
}: GInputType) => {
  return (
    <div className="my-4">
      <p className={`${inputError ? "text-red-600" : "text-[#344054]"}  mb-1`}>
        {label}
      </p>
      <span>
        <select
          placeholder={placeholder}
          name={name}
          type={type}
          className={`w-full px-4  outline-none focus:border-hgrey100 focus:border-2 py-3 rounded-lg border ${
            inputError ? "border-red-600" : "border-[#D0D5DD]"
          } `}
        >
            <option>
                
            </option>
        </select>
      </span>
      <div className="text-red-400">{inputError}</div>
    </div>
  );
};
