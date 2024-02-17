"use client";
import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const BalanceLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePageActive("balance"));
  } , []);
  return <>{children}</>;
};

export default BalanceLayout;
