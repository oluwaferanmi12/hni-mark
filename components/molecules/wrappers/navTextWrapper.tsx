import { NavText } from "@/components/atoms/texts";
import { NavTextWrapperType } from "@/types";

import Image from "next/image";
import React from "react";

export const NavTextWrapper = ({
  icon,
  active,
  text,
}: NavTextWrapperType) => {
  return (
    <div
      className={`flex font-roboto rounded-lg p-2 items-center ${
        active ? "bg-[#F7F5F2] border border-[#E4E4E4]" : ""
      }`}
    >
      <span className="mr-4">
        <Image src={icon} alt="" />
      </span>
      <NavText text={text} active={active} />
    </div>
  );
};
