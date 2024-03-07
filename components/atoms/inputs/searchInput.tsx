import React from "react";
import searchIcon from "@/public/assets/svgs/search.svg";
import Image from "next/image";

export const SearchInput = () => {
  return (
    <span className="relative">
      <input
        className="border focus:border-2 placeholder:text-[#C0C0C0] pl-10 text-[#C0C0C0] focus:outline-none border-[#C0C0C0] py-2 px-4 rounded-lg"
        name="search"
        placeholder="Search"
      />
      <span className="absolute top-3 left-4">
        <Image src={searchIcon} alt="" />
      </span>
    </span>
  );
};
