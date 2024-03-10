import { ModalWrapper } from "@/components/molecules/wrappers/modalWrapper";
import React from "react";
import Image from "next/image";
import roundedAdd from "@/public/assets/svgs/bookingModalIcon.svg";
import cancel from "@/public/assets/svgs/cancel.svg";
import avatar from "@/public/assets/svgs/avatarReal.svg";
import phone from "@/public/assets/svgs/phone.svg";
import { FormSubmitButton } from "@/components/atoms/inputs";

export const BookingModal = ({ handleClose }: VehicleModalType) => {
  return (
    <>
      <ModalWrapper handleInactive={handleClose} />
      <div className="rounded-lg w-full fixed left-0 z-20 px-6 py-4  h-screen flex justify-center">
        <div className="w-[500px] bg-white py-4 px-6 rounded-lg  min-h-[600px] h-[650px] max-h-screen">
          <div className="flex justify-between items-center ">
            <span>
              <Image src={roundedAdd} alt="" />
            </span>
            <span onClick={() => handleClose(false)} className="cursor-pointer">
              <Image src={cancel} alt="" />
            </span>
          </div>
          <div>
            <div>
              <p className="text-2xl text-[#1D1E1F] font-robotoCondensed font-semibold my-2">
                Booking details
              </p>
              <p className="text-[#344054] my-3">User information</p>
            </div>
            <div>
              <span className="bg-[#F9F9FA] rounded-lg  py-3 px-3 flex items-center text-[#344054]">
                <span>
                  <Image src={avatar} alt="" width={100} height={100} />
                </span>
                <span>
                  <p className="text-[20px]">Olaitan Akinlade</p>
                  <p className="my-2">15 wakati adura street, lekki phase 1.</p>
                  <p>08106127172</p>
                </span>
                <span className="ml-8">
                  <Image src={phone} alt="" />
                </span>
              </span>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[#344054] my-3">Ride information</p>
            </div>
            <div>
              <span className="bg-[#F9F9FA] rounded-lg  py-3  px-3 flex text-[#344054]">
                <span>
                  <Image src={avatar} alt="" width={120} height={120} />
                </span>
                <span className="w-full">
                  <p className="text-[20px]">Benz Gle</p>
                  <p className="my-2">2012</p>
                  <p>5 hours</p>
                  <span className="flex justify-between items-center w-full">
                    <p>8pm - 12am</p>
                    <p>20th April 2024</p>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#1D1E1F] py-4 text-4xl">NGN 250,000.00</p>
          </div>
          <div>
            <FormSubmitButton disabled={false} text="Confirm" />
          </div>
        </div>
      </div>
    </>
  );
};
