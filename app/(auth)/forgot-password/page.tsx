import { Col, Row } from "antd";
import React from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";

const Register = () => {
  return (
    <div className="h-screen bg-hblue50   flex w-full  items-center justify-center">
      <Row align={"middle"} justify={"center"} className="w-full">
        <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <div className="bg-white p-8 rounded-lg shadow-md min-w-full w-full block">
            <div className="flex justify-center mb-3">
              <Image src={logo} alt="" />
            </div>
            <div className="mb-8">
              <FormHeaderText text="Recover Password" />
            </div>

            <GInput
              label="Email"
              placeholder="Enter email associated with account"
              type="text"
              name="email"
            />

            <FormSubmitButton text="Submit" disabled={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
