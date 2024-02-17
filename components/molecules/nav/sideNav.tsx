import React from "react";
import logo from "@/public/assets/svgs/logo.svg";
import Image from "next/image";
import { navData } from "@/utils/navData";
import { Atoms } from "@/components";

export const SideNav = () => {
  return (
    <div className="max-w-[300px] w-[300px] py-8 px-4 border h-screen min-h-screen">
      <div>
        <Image src={logo} alt="" />
      </div>
      <div>
        {navData.map(() => {
            return <>
                <Atoms.
            </>
        })}
      </div>
    </div>
  );
};
