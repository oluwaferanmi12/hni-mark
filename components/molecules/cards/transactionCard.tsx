import React from "react";
import moneyIn from "@/public/assets/svgs/moneyIn.svg";
import moneyOut from "@/public/assets/svgs/moneyOut.svg";
import Image from "next/image";
import { Col, Row } from "antd";

export const TransactionCard = () => {
  return (
    <Row className="h-[200px] flex w-full border rounded-lg ">
      <Col
        xs={12}
        className="flex flex-col justify-between border-r px-10 py-10"
      >
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">MONEY IN</p>
          <span>
            <Image src={moneyIn} alt="" />
          </span>
        </div>
        <p className="font-semibold text-2xl py-6">NGN 200,000.00</p>
        <div>
          <span className="text-red-500">20% down</span>
          <span className="text-[#667084]"> since last month</span>
        </div>
      </Col>
      <Col xs={12} className=" py-10 flex flex-col justify-between px-10">
        <div className="flex items-center justify-between">
          <p className="text-[#667085]">MONEY OUT</p>
          <span>
            <Image src={moneyOut} alt="" />
          </span>
        </div>
        <p className="font-semibold text-2xl py-6">NGN 200,000.00</p>
        <div>
          <span className="text-red-500">20% down</span>
          <span className="text-[#667084]"> since last month</span>
        </div>
      </Col>
    </Row>
  );
};
