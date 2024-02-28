"use client";
import { Col, Row } from "antd";
import React from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";
import { AuthFormWrapper } from "@/components/molecules/wrappers";

const Register = () => {
  return (
    <AuthFormWrapper>
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
    </AuthFormWrapper>
  );
};

export default Register;
