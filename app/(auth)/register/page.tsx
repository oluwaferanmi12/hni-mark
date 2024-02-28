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
import { RegisterType } from "@/types";
import { toast } from "sonner";

const Register = () => {
  const [bLoading, setBLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [bNameError, setBNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateData = ({
    businessName,
    email,
    password,
    phone,
  }: RegisterType) => {};
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // const validate = validateData({businessName: data.businessName,});
    apiCall("Account/Business/Register", "post", {
      ...data,
      serviceId: "d283999f-1d0e-4a24-9e61-b99f90b3bb48",
    })
      .then((res) => {
        toast.success("Otp Sent Successfully");
        console.log(res);
      })
      .catch((e) => {})
      .finally(() => {
        setBLoading(false);
      });
  };
  return (
    <div className="h-screen bg-hblue50   flex w-full  items-center justify-center">
      <Row align={"middle"} justify={"center"} className="w-full">
        <Col xs={22} sm={16} md={12} lg={12} xl={8}>
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
                inputError={emailError}
              />

              <GInput
                label="Phone number"
                placeholder="Enter phone number"
                type="text"
                name="phone"
                inputError={phoneError}
              />

              <GInput
                label="Business name"
                placeholder="Enter business name"
                type="text"
                name="businessName"
                inputError={bNameError}
              />
              <GInput
                label="Password"
                placeholder="Enter password"
                type="password"
                name="password"
                inputError={passwordError}
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
