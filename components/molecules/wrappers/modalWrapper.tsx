import { ModalWrapperType } from "@/types";
import React from "react";

export const ModalWrapper = ({ handleInactive }: ModalWrapperType) => {
  return (
    <div
      onClick={() => handleInactive(false)}
      className="fixed top-0 left-0 h-screen w-screen z-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    ></div>
  );
};
