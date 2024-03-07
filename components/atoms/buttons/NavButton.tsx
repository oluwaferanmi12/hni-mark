import React from "react";
import roundedAdd from "@/public/assets/svgs/roundedAdd.svg";
import Image from "next/image";
import { NavButtonType } from "@/types";

export const NavButton = ({ text, action }: NavButtonType) => {
  return (
    <button
      onClick={action}
      className="bg-[#F3F0EB] gap-1 px-6 py-3 rounded-lg text-hblue500 flex items-center"
    >
      <span>
        <Image src={roundedAdd} alt="" />
      </span>
      <span>{text}</span>
    </button>
  );
};
