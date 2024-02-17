"use client";

import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const VehiclesLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlePageActive("vehicles"));
  }, []);
  return <>{children}</>;
};

export default VehiclesLayout;
