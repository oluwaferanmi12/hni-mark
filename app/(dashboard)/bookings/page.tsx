"use client";

import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React from "react";

function Bookings() {
  return (
    <div>
      <DashboardNavWrapper
        headerText="Bookings"
        extraText="Create and monitor"
        button={
          <button onClick={() => console.log("I Got clicked")}>
            My button
          </button>
        }
      />
    </div>
  );
}

export default Bookings;
