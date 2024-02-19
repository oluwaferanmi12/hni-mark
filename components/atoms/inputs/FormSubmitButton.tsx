import { FormSubmitButtonType } from "@/types";
import React from "react";

export const FormSubmitButton = ({ text, disabled }: FormSubmitButtonType) => {
  return (
    <div className="my-3">
      <input
        className="w-full font-roboto font-semibold py-4 text-center text-white rounded-lg bg-hblue500 cursor-pointer"
        type="submit"
        disabled
        value={text}
      />
    </div>
  );
};
