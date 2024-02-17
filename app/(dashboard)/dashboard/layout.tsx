"use client";
import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePageActive("dashboard"));
  } , []);
  return <>{children}</>;
};

export default DashboardPageLayout;
