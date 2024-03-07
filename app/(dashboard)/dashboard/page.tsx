"use client";
import { handlePageActive } from "@/store/slices/pageActiveSlice";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Metadata } from "next";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";
import { NavButton } from "@/components/atoms/buttons";

function Dashboard() {
  const dispatch = useDispatch();
  const [addButton, setAddButton] = useState();
  useEffect(() => {
    //handle the active page
    dispatch(handlePageActive("dashboard"));
  }, []);
  return (
    <div>
      <Head>
        <title>Dashboard </title>
      </Head>

      <DashboardNavWrapper
        headerText="Dashboard"
        extraText="create edit and monitor"
        button={<NavButton action={setAddButton} text="Add" />}
      />
    </div>
  );
}

export default Dashboard;
