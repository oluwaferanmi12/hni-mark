import { ModalWrapper } from "@/components/molecules/wrappers/modalWrapper";
import React from "react";
import Image from "next/image";
import roundedAdd from "@/public/assets/svgs/bookingModalIcon.svg";
import cancel from "@/public/assets/svgs/cancel.svg";
import avatar from "@/public/assets/svgs/avatarReal.svg";
import phone from "@/public/assets/svgs/phone.svg";

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
          <div>
            <p className="text-2xl text-[#1D1E1F] font-robotoCondensed font-semibold my-2">
              Booking details
            </p>
            <p className="text-[#344054] my-3">User information</p>
          </div>
          <div>
            <span className="bg-[#F9F9FA] rounded-lg  py-3 justify-between px-3 flex items-center text-[#344054]">
              <span>
                <Image src={avatar} alt="" />
              </span>
              <span>
                <p className="text-[20px]">Olaitan Akinlade</p>
                <p className="my-2">15 wakati adura street, lekki phase 1.</p>
                <p>08106127172</p>
              </span>
              <span>
                <Image src={phone} alt="" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
