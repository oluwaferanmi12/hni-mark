"use client";

import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React from "react";

function Vehicles() {
  return (
    <div>
      <DashboardNavWrapper
        headerText="Vehicles"
        extraText="create and monitor vehicles"
        button={
          <button onClick={() => console.log("I Got clicked")}>
            My button
          </button>
        }
      />
    </div>
  );
}

export default Vehicles;
