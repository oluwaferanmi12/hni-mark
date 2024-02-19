import { GeneralTextType } from "@/types";
import React from "react";

export const FormHeaderText = ({ text }: GeneralTextType) => {
  return <p className="text-[#1D1E1F] font-robotoCondensed text-2xl">{text}</p>;
};
