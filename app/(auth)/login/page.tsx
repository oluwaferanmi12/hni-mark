import { Col, Row } from "antd";
import React from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";

const Login = () => {
  return (
    <div className="h-screen bg-hblue50   flex w-full  items-center justify-center">
      <Row align={"middle"} justify={"center"} className="w-full">
        <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <div className="bg-white p-8 rounded-lg shadow-md min-w-full w-full block">
            <div className="flex justify-center mb-3">
              <Image src={logo} alt="" />
            </div>
            <div className="mb-8">
              <FormHeaderText text="Login" />
            </div>
            <GInput
              label="Email"
              placeholder="Enter email"
              type="text"
              name="email"
            />
            <GInput
              label="Password"
              placeholder="Enter password"
              type="text"
              name="password"
            />
            <Link href={"/forgot-password"}>
              <p className="text-[#667085] font-semibold font-roboto underline">
                Forgot Password?
              </p>
            </Link>
            <FormSubmitButton text="Login" disabled={false} />

            <div className="flex justify-center items-center">
              <p className="font-roboto mr-6">Don't have an account?</p>
              <Link href={"/register"}>
                <div className="flex  items-center  px-6 rounded-lg py-3 border border-[#ACB2BD]">
                  <span className="font-semibold text-[#0E0E0E]">Join Us</span>
                  <span className="ml-1">
                    <Image src={rightIcon} alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
