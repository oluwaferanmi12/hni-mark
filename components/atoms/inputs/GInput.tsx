import { GInputType } from "@/types";
import React, { useState } from "react";
import eyeOpen from "@/public/assets/svgs/eyeOpen.svg";
import eyeClosed from "@/public/assets/svgs/eyeClosed.svg";
import Image from "next/image";

export const GInput = ({
  label,
  placeholder,
  type = "text",
  name,
  error = "",
  inputError,
}: GInputType) => {
  const [passwordActive, setPasswordActive] = useState(false);
  return (
    <div className="my-4">
      <p className={`${inputError ? "text-red-600" : "text-[#344054]"}  mb-1`}>
        {label}
      </p>
      <span className="relative">
        <input
          placeholder={placeholder}
          name={name}
          type={ type === "password" ? passwordActive ?  "text" : "password" : type}
          className={`w-full px-4  outline-none focus:border-hgrey100 focus:border-2 py-3 rounded-lg border ${
            inputError ? "border-red-600" : "border-[#D0D5DD]"
          } `}
        />
        {type === "password" ? (
          <span
            className="absolute right-4 cursor-pointer top-0"
            onClick={() => {
              setPasswordActive((prev) => !prev);
            }}
          >
            <Image src={passwordActive ? eyeOpen : eyeClosed} alt="" />
          </span>
        ) : (
          ""
        )}
      </span>
      <div className="text-red-400">{inputError}</div>
    </div>
  );
};
