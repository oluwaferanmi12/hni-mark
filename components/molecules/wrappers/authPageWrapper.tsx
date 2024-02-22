import React from "react";
import topImage from "@/public/assets/images/3d_shape_3 2.png";
import downImage from "@/public/assets/images/3d_shape_3 3.png";
import Image from "next/image";

export const AuthPageWrapper = () => {
  return (
    <div className="border fixed w-full h-screen min-h-screen">
      <div className="fixed top-0 right-0">
        <Image src={downImage} alt="" />
      </div>
      <div className="fixed bottom-0 left-0">
        <Image src={topImage} alt="" />
      </div>
    </div>
  );
};
