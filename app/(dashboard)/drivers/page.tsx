"use client";

import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import Head from "next/head";
import React from "react";

function Drivers() {
  return (
    <>
      <Head>
        <title>Drivers Page</title>
      </Head>
      <DashboardNavWrapper
        headerText="Drivers"
        extraText="Monitor and track drives"
        button={
          <button onClick={() => console.log("I Got clicked")}>
            My button
          </button>
        }
      />
    </>
  );
}

export default Drivers;
