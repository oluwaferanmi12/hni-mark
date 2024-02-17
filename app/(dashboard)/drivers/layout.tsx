"use client";

import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DriverLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePageActive("drivers"));
  }, []);
  return <>{children}</>;
};

export default DriverLayout;
