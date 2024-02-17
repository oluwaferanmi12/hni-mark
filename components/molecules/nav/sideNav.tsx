import React from "react";
import logo from "@/public/assets/svgs/logo.svg";
import Image from "next/image";
import { navData } from "@/utils/navData";
import Link from "next/link";
import { NavTextWrapper } from "@/components/molecules/wrappers";

export const SideNav = () => {
  return (
    <div className="max-w-[300px] w-[300px] py-8 px-4 border h-screen min-h-screen">
      <div className="mb-8">
        <Image src={logo} alt="" />
      </div>
      <div>
        {navData.map((item, index) => {
          return (
            <div key={index} className="my-4">
              <Link href={item.url}>
                <NavTextWrapper
                  icon={item.iconActive}
                  active
                  text={item.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
