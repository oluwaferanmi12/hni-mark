"use client"
import { FormSubmitButtonType } from "@/types";
import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useSpring, animated } from "@react-spring/web";

export const FormSubmitButton = ({ text, disabled }: FormSubmitButtonType) => {
  const [springs, api] = useSpring(() => ({
    from: { backgroundColor: "#030389" },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    if (disabled) {
      api.start({
        from: { backgroundColor: "#030389" },
        to: { backgroundColor: "#E6E6F3" },
      });
    } else {
      api.start({
        from: { backgroundColor: "#030389" },
      });
    }
  }, [disabled]);

  return (
    <div className="my-3">
      <animated.button
        className={`w-full font-roboto font-semibold py-4 text-center text-white rounded-lg ${
          disabled ? "bg-hblue50" : "bg-hblue500"
        } cursor-pointer`}
        type="submit"
        disabled={disabled}
        style={{ ...springs }}
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
      </animated.button>
    </div>
  );
};
