"use client";
import { NavText } from "@/components/atoms/texts";
import { NavTextWrapperType } from "@/types";
import { useSpring, animated } from "@react-spring/web";
import { navData } from "@/utils/navData";

import Image from "next/image";
import React, { useEffect } from "react";

export const NavTextWrapper = ({
  icon,
  active,
  text,
  pageActive,
  currentIndex,
}: NavTextWrapperType) => {
  const [styles, api] = useSpring(() => ({
    from: { backgroundColor: "transparent", border: "none", color: "#131313" },
    config: { duration: 1000 },
  }));

  const getActiveIndex = (): number => {
    const activeData = navData.findIndex(
      (item, index) => item.alias === pageActive
    );
    return activeData;
  };

  

  return (
    <animated.div
      className={`flex font-roboto rounded-lg p-3 items-center ${
        active ? "bg-black text-[#E7E7E7]" : "bg-transparent"
      }`}
    >
      <span className="mr-4">
        <Image src={icon} alt="" />
      </span>
      <span>
        <p>{text}</p>
      </span>
    </animated.div>
  );
};
