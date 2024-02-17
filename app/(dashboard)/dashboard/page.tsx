"use client";
import { handlePageActive } from "@/store/slices/pageActiveSlice";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Metadata } from "next";
import { DashboardNavWrapper } from "@/components/molecules/wrappers";

function Dashboard() {
  const dispatch = useDispatch();
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
        button={
          <button onClick={() => console.log("I Got clicked")}>
            My button
          </button>
        }
      />
    </div>
  );
}

export default Dashboard;
