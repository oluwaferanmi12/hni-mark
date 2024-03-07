import { ModalWrapperType } from "@/types";
import React from "react";

export const ModalWrapper = ({ handleInactive }: ModalWrapperType) => {
  return (
    <div
      onClick={() => handleInactive(false)}
      className="fixed h-screen w-screen z-50 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    ></div>
  );
};
