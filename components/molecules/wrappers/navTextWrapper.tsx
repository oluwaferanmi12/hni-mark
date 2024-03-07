"use client";
import { NavText } from "@/components/atoms/texts";
import { NavTextWrapperType } from "@/types";
import { useSpring, animated } from "@react-spring/web";

import Image from "next/image";
import React, { useEffect } from "react";

export const NavTextWrapper = ({ icon, active, text }: NavTextWrapperType) => {
  const [styles, api] = useSpring(() => ({
    from: { backgroundColor: "transparent", border: "none", color: "#131313" },
    config: { duration: 1000 },
  }));
  useEffect(() => {
    if (active) {
      api.start({
        from: {
          backgroundColor: "transparent",
          border: "none",
          color: "#131313",
        },
        to: { backgroundColor: "#000", border: "#E4E4E4", color: "#E7E7E7" },
      });
    } else {
      api.start({
        from: {
          backgroundColor: "transparent",
          border: "none",
          color: "#131313",
        },
      });
    }
  }, [active]);
  return (
    <animated.div
      className={`flex font-roboto rounded-lg p-3 items-center`}
      style={styles}
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
