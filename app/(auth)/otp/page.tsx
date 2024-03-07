"use client";

import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import { AuthFormWrapper } from "@/components/molecules/wrappers";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton } from "@/components/atoms/inputs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { apiCall } from "@/api/api";

const OtpPage = () => {
  const router = useRouter();
  const [otpVal, setOtpValue] = useState(["", "", "", "", "", ""]);
  const [bLoading, setBLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleUpdateIndex = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isNaN(+e.target.value)) {
      // Do not forget an empty space using the + is still implicitly a number
      return;
    }
    const otpSnap = [...otpVal];
    otpSnap[index] = e.target.value.substring(e.target.value.length - 1);
    setOtpValue([...otpSnap]);
    if (e.target.value === "") {
      setActiveIndex(index);
      return;
    }
    setActiveIndex(index + 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      setActiveIndex(-1);
    };
  }, [activeIndex]);

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const otpValSnap = [...otpVal];
    otpValSnap[index] = !isNaN(+e.key) ? e.key : otpValSnap[index];
    if (otpValSnap[index] === "" && e.key === "Backspace") {
      setActiveIndex(index - 1);
    }
  };

  const handleSubmitOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBLoading(true);
    // convert otpVal to string , then check the lenght
    const newString = otpVal.join("");
    console.log(newString);

    if (newString.length < 6) {
      toast.error("Please enter OTP code correctly");
      setBLoading(false);
      return;
    }
    const lData = JSON.parse(localStorage.getItem("businessPayload") || "");
    apiCall("Account/VerifyAccount", "post", {
      otp: newString,
      reference: lData.reference,
      recipient: lData.email,
      username: lData.email,
      mode: "email",
    })
      .then((res) => {
        toast.success("Otp validated successfully");
        localStorage.removeItem("businessPayload");
        router.push("/login");
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setBLoading(false));
  };

  useEffect(() => {
    if (!localStorage.getItem("businessPayload")) {
      router.push("/register");
    }
  }, []);
  return (
    <AuthFormWrapper>
      <div className="mb-8">
        <FormHeaderText text="OTP" />
      </div>
      <p className="my-2">Secure code</p>
      <form onSubmit={handleSubmitOtp}>
        <div className="flex items-center gap-3">
          {otpVal.map((item, index) => {
            return (
              <div key={index}>
                <input
                  onKeyDown={(e) => {
                    handleOnKeyDown(e, index);
                  }}
                  ref={activeIndex == index ? inputRef : null}
                  placeholder="0"
                  value={otpVal[index]}
                  onChange={(e) => handleUpdateIndex(e, index)}
                  className="w-[60px] h-[60px] flex items-center justify-center focus:outline-none focus:border-hgrey100 px-3 text-3xl text-center rounded-lg border-2 border-hgrey50"
                />
              </div>
            );
          })}
        </div>
        <p className="text-hgrey200 my-2">This is a hint text to help user.</p>
        <FormSubmitButton disabled={bLoading} text="Verify" />
      </form>
    </AuthFormWrapper>
  );
};

export default OtpPage;
