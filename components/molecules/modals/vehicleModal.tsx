import React from "react";
import roundedAdd from "@/public/assets/svgs/roundedAdd.svg";
import Image from "next/image";
import cancel from "@/public/assets/svgs/cancel.svg";
import { GInput } from "@/components/atoms/inputs";
import { ModalWrapper } from "@/components/molecules/wrappers/modalWrapper";

export const VehicleModal = ({ handleClose }: VehicleModalType) => {
  const handleSubmit = () => {};
  return (
    <>
      <ModalWrapper handleInactive={handleClose} />
      <div className="rounded-lg bg-white py-5 px-3 fixed">
        <div className="flex justify-between">
          <span>
            <Image src={roundedAdd} alt="" />
          </span>
          <span onClick={() => handleClose(false)}>
            <Image src={cancel} alt="" />
          </span>
        </div>

        <div>
          <p>Create Vehicle</p>
        </div>

        <form onSubmit={handleSubmit}>
          <GInput
            name="name"
            label="Name"
            type="text"
            placeholder="Vehicle Name"
          />
        </form>
      </div>
    </>
  );
};
