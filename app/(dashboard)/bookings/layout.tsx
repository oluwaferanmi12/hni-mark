"use client";

import { handlePageActive } from "@/store/slices/pageActiveSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const BookingsLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePageActive("bookings"));
  }, []);
  return <>{children}</>;
};

export default BookingsLayout;
