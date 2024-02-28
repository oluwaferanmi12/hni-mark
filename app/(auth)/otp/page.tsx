"use client";

import React, { useState } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { AuthFormWrapper } from "@/components/molecules/wrappers";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton } from "@/components/atoms/inputs";

const OtpPage = () => {
  const [otpVal, setOtpValue] = useState(["", "", "", "", "", ""]);
  const [bLoading, setBLoading] = useState(false);
  return (
    <AuthFormWrapper>
      <div className="mb-8">
        <FormHeaderText text="OTP" />
      </div>
      <p className="my-2">Secure code</p>
      <div className="flex items-center gap-3">
        {otpVal.map((item, index) => {
          return (
            <div>
              <input
                placeholder="0"
                className="w-[60px] h-[60px] flex items-center justify-center focus:outline-none focus:border-hgrey100 px-3 text-3xl text-center rounded-lg border-2 border-hgrey50"
              />
            </div>
          );
        })}
      </div>
      <p className="text-hgrey200 my-2">This is a hint text to help user.</p>
      <FormSubmitButton disabled={bLoading} text="Verify" />
    </AuthFormWrapper>
  );
};

export default OtpPage;
