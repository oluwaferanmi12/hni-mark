"use client";
import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    //handle the active page
    dispatch(handlePageActive("dashboard"));
  }, []);
  return (
    <>
      <div>Dashboard</div>
    </>
  );
}

export default Dashboard;
