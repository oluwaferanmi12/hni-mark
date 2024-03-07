import React, { useState } from "react";
import roundedAdd from "@/public/assets/svgs/roundedShadow.svg";
import Image from "next/image";
import cancel from "@/public/assets/svgs/cancel.svg";
import { FormSubmitButton, GInput } from "@/components/atoms/inputs";
import { ModalWrapper } from "@/components/molecules/wrappers/modalWrapper";

export const VehicleModal = ({ handleClose }: VehicleModalType) => {
  const handleSubmit = () => {};
  const [buttonLoading, setButtonLoading] = useState(false);
  return (
    <>
      <ModalWrapper handleInactive={handleClose} />
      <div className="rounded-lg border   w-full fixed left-0 z-20 px-6 py-4  h-screen flex justify-center">
        <div className="w-[500px] bg-white py-4 px-6 rounded-lg  min-h-[600px] h-[600px] max-h-screen">
          <div className="flex justify-between items-center ">
            <span>
              <Image src={roundedAdd} alt="" />
            </span>
            <span onClick={() => handleClose(false)} className="cursor-pointer">
              <Image src={cancel} alt="" />
            </span>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-robotoCondensed font-semibold">
              Create Vehicle
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <GInput
              name="name"
              label="Name"
              type="text"
              placeholder="Vehicle Name"
            />
            <GInput
              name="name"
              label="Name"
              type="text"
              placeholder="Vehicle Name"
            />
            <GInput
              name="name"
              label="Name"
              type="text"
              placeholder="Vehicle Name"
            />
            <GInput
              name="name"
              label="Name"
              type="text"
              placeholder="Vehicle Name"
            />

            <FormSubmitButton disabled={buttonLoading} text="Create" />
          </form>
        </div>
      </div>
    </>
  );
};
