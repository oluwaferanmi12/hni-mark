import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import logo from "@/public/assets/svgs/logoRounded.svg";

export const AuthFormWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen bg-hblue50   flex w-full  items-center justify-center">
      <Row align={"middle"} justify={"center"} className="w-full">
        <Col xs={22} sm={16} md={12} lg={12} xl={8}>
          <div className="bg-white p-8 rounded-lg shadow-md min-w-full w-full block">
            <div className="flex justify-center mb-3">
              <Image src={logo} alt="" />
            </div>
            <div>{children}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
