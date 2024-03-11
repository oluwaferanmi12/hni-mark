"use client";

import { NavButton } from "@/components/atoms/buttons";
import { WalletTable } from "@/components/molecules/tables";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import React, { useState } from "react";

function Page() {
  const [withdraw, setWithdraw] = useState(false);
  return (
    <div>
      <DashboardNavWrapper
        headerText="Balance"
        extraText="monitor and track you balance here"
        button={<NavButton text="Request withdraw" action={setWithdraw} />}
      />
      <WalletTable />
    </div>
  );
}

export default Page;
