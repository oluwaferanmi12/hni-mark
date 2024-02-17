"use client";

import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React from "react";

function Page() {
  return (
    <div>
      <DashboardNavWrapper
        headerText="Balance"
        extraText="monitor and track you balance here"
        button={
          <button onClick={() => console.log("I Got clicked")}>
            My button
          </button>
        }
      />
    </div>
  );
}

export default Page;
