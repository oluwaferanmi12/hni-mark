"use client";

import { apiCall } from "@/api/api";
import { NavButton } from "@/components/atoms/buttons";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React, { useEffect, useState } from "react";

function Bookings() {
  const [generateReport, setGenerateReport] = useState(false);

  //functions
  const getOrders = () => {
    apiCall("/Orders", "get")
      .then((res) => {
        console.log(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);
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
