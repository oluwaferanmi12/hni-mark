import { FormSubmitButtonType } from "@/types";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const FormSubmitButton = ({ text, disabled }: FormSubmitButtonType) => {
  return (
    <div className="my-3">
      <button
        className={`w-full font-roboto font-semibold py-4 text-center text-white rounded-lg ${
          disabled ? "bg-hblue50" : "bg-hblue500"
        } cursor-pointer`}
        type="submit"
        disabled={disabled}
      >
        {disabled ? (
          // <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          <>
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 24, color: "#0D0D0D" }}
                  spin
                />
              }
            />
          </>
        ) : (
          <p>{text}</p>
        )}
      </button>
    </div>
  );
};
