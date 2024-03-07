import { ModalWrapper } from "@/components/molecules/wrappers/modalWrapper";
import React from "react";
import Image from "next/image";
import roundedAdd from "@/public/assets/svgs/bookingModalIcon.svg";
import cancel from "@/public/assets/svgs/cancel.svg";

export const BookingModal = ({ handleClose }: VehicleModalType) => {
  return (
    <>
      <ModalWrapper handleInactive={handleClose} />
      <div className="rounded-lg w-full fixed left-0 z-20 px-6 py-4  h-screen flex justify-center">
        <div className="w-[500px] bg-white py-4 px-6 rounded-lg  min-h-[600px] h-[600px] max-h-screen">
          <div className="flex justify-between items-center ">
            <span>
              <Image src={roundedAdd} alt="" />
            </span>
            <span onClick={() => handleClose(false)} className="cursor-pointer">
              <Image src={cancel} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
