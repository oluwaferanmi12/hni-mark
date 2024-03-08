"use client";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/svgs/logoRounded.svg";
import Image from "next/image";
import { FormHeaderText } from "@/components/atoms/texts";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import Link from "next/link";
import rightIcon from "@/public/assets/svgs/rightIconBlack.svg";
import { apiCall } from "@/api/api";
import { RegisterType } from "@/types";
import { toast } from "sonner";
import { validateEmail } from "@/utils/emailValidate";
import { AuthFormWrapper } from "@/components/molecules/wrappers";
import { useRouter } from "next/navigation";
import { GSelect } from "@/components/atoms/inputs/GSelect";

interface ServiceType {
  title: string;
  id: string;
}

const Register = () => {
  const router = useRouter();
  const [bLoading, setBLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [bNameError, setBNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [services, setServices] = useState<ServiceType[]>([]);
  const [serviceError, setServiceError] = useState("");

  const getServices = () => {
    apiCall("Products/Services", "get").then((res) => {
      setServices(res?.data);
    });
  };

  const validateData = (data: any): boolean => {
    let errorFound = 0;
    if (!data.email) {
      setEmailError("Email is required");
      errorFound = 1;
    } else if (data.email && !validateEmail(data.email)) {
      errorFound = 1;
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    if (!data.businessName) {
      errorFound = 1;
      setBNameError("Business Name is required");
    } else {
      setBNameError("");
    }

    if (!data.phone) {
      errorFound = 1;
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }

    if (!data.serviceId) {
      errorFound = 1;
      setServiceError("A service id is required");
    } else {
      setServiceError("");
    }

    if (!data.password) {
      errorFound = 1;
      setPasswordError("Password is required");
    } else if (data.password && data.password.length < 5) {
      errorFound = 1;
      setPasswordError("Password must be greater than 5");
    } else {
      setPasswordError("");
    }
    return errorFound ? false : true;
  };
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const validated = validateData(data);
    if (!validated) {
      setBLoading(false);
      return;
    }
    apiCall("Account/Business/Register", "post", {
      ...data,
    })
      .then((res) => {
        localStorage.setItem(
          "businessPayload",
          JSON.stringify({ ...res?.data, email: data.email })
        );
        toast.success("Otp Sent Successfully");
        router.push("/otp");
      })
      .catch((e) => {})
      .finally(() => {
        setBLoading(false);
      });
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <AuthFormWrapper>
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
        <GSelect
          label="Business Service"
          name="serviceId"
          options={services}
          optionDefaultText="Please select a service..."
          inputError={serviceError}
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
    </AuthFormWrapper>
  );
};

export default Register;
