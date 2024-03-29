"use client";

import { NavButton } from "@/components/atoms/buttons";
import { VehicleModal } from "@/components/molecules/modals";
import { VehiclesTable } from "@/components/molecules/tables";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React, { useState } from "react";

function Vehicles() {
  const [addVehicle, setAddVehicle] = useState(false);
  return (
    <>
      {addVehicle && <VehicleModal handleClose={setAddVehicle} />}

      <div>
        <DashboardNavWrapper
          headerText="Vehicles"
          extraText="create and monitor vehicles"
          button={<NavButton action={setAddVehicle} text="Add vehicle" />}
        />
        <VehiclesTable />
      </div>
    </>
  );
}

export default Vehicles;
