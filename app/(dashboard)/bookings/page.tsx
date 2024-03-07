"use client";

import { NavButton } from "@/components/atoms/buttons";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React, { useState } from "react";

function Bookings() {
  const [generateReport, setGenerateReport] = useState(false);
  return (
    <div>
      <DashboardNavWrapper
        headerText="Bookings"
        extraText="Create and monitor"
        button={<NavButton text="Generate report" action={setGenerateReport} />}
      />
    </div>
  );
}

export default Bookings;
