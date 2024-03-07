"use client";

import { Col, Row } from "antd";
import React, { InputHTMLAttributes, useState } from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";
import { apiCall } from "@/api/api";
import { Toaster, toast } from "sonner";
import { AuthFormWrapper } from "@/components/molecules/wrappers";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [bLoading, setBLoading] = useState(false);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    apiCall("Account/login", "post", {
      password: data.password,
      userName: data.email,
    })
      .then((res) => {
        toast.success("Logged in successfully");
        console.log(res?.data);
        localStorage.setItem("access_payload", JSON.stringify(res?.data));
        router.push("/bookings");
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setBLoading(false);
      });
  };
  return (
    <AuthFormWrapper>
      <div className="mb-8">
        <FormHeaderText text="Login" />
      </div>
      <form onSubmit={handleLogin}>
        <GInput
          label="Email"
          placeholder="Enter email"
          type="text"
          name="email"
        />
        <GInput
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
        />
        <Link href={"/forgot-password"}>
          <span className="text-[#667085] font-semibold font-roboto underline">
            Forgot Password?
          </span>
        </Link>
        <FormSubmitButton text="Login" disabled={bLoading} />
      </form>

      <div className="flex justify-center items-center">
        <p className="font-roboto mr-6">Don&apos;t have an account?</p>
        <Link href={"/register"}>
          <div className="flex  items-center  px-6 rounded-lg py-3 border border-[#ACB2BD]">
            <span className="font-semibold text-[#0E0E0E]">Join Us</span>
            <span className="ml-1">
              <Image src={rightIcon} alt="" />
            </span>
          </div>
        </Link>
      </div>
    </AuthFormWrapper>
  );
};

export default Login;
