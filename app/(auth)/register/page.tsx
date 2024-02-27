"use client";
import { Col, Row } from "antd";
import React, { useState } from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";
import { apiCall } from "@/api/api";

const Register = () => {
  const [bLoading, setBLoading] = useState(false);
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    apiCall("Account/Business/Register", "post", {
      ...data,
      serviceId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setBLoading(false);
      });
  };
  return (
    <div className="h-screen bg-hblue50   flex w-full  items-center justify-center">
      <Row align={"middle"} justify={"center"} className="w-full">
        <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <div className="bg-white p-8 rounded-lg shadow-md min-w-full w-full block">
            <div className="flex justify-center mb-3">
              <Image src={logo} alt="" />
            </div>
            <form onSubmit={handleRegister}>
              <div className="mb-8">
                <FormHeaderText text="Sign up" />
              </div>

              <GInput
                label="Email"
                placeholder="Enter email"
                type="text"
                name="email"
              />

              <GInput
                label="Phone number"
                placeholder="Enter phone number"
                type="text"
                name="phone"
              />

              <GInput
                label="Business name"
                placeholder="Enter business name"
                type="text"
                name="businessName"
              />
              <GInput
                label="Password"
                placeholder="Enter password"
                type="password"
                name="password"
              />

              <FormSubmitButton text="Register" disabled={bLoading} />
            </form>

            <div className="flex justify-center items-center">
              <p className="font-roboto mr-6">Already have an account?</p>
              <Link href={"/login"}>
                <div className="flex  items-center  px-6 rounded-lg py-3 border border-[#ACB2BD]">
                  <span className="font-semibold text-[#0E0E0E]">Login</span>
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

export default Register;
