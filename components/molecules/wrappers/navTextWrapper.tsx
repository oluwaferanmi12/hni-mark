import { NavText } from "@/components/atoms/texts";
import { WrapperTypes } from "@/types";
import Image from "next/image";
import React from "react";

export const NavTextWrapper = ({
  icon,
  active,
  text,
}: WrapperTypes.NavTextWrapperType) => {
  return (
    <div
      className={`flex items-center ${
        active ? "bg-[#F7F5F2] border border-[#E4E4E4] rounded-lg p-2" : ""
      }`}
    >
      <span className="mr-4">
        <Image src={icon} alt="" />
      </span>
      <NavText text={text} active={active} />
    </div>
  );
};
