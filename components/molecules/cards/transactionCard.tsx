import React from "react";
import moneyIn from "@/public/assets/svgs/moneyIn.svg";
import moneyOut from "@/public/assets/svgs/moneyOut.svg";
import Image from "next/image";

export const TransactionCard = () => {
  return (
    <div className="h-[200px] flex  px-4 w-full">
      <div className="pr-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p>MONEY IN</p>
          <span>
            <Image src={moneyIn} alt="" />
          </span>
        </div>
      </div>
      <div className="pl-4 pr-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <p>MONEY OUT</p>
          <span>
            <Image src={moneyOut} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};
