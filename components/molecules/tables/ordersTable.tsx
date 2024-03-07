import { apiCall } from "@/api/api";
import { TableEmpty, TableLoading } from "@/components/atoms/tables";
import React from "react";
import { useState, useEffect } from "react";

export const OrdersTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [orders, setOrders] = useState<any>([]);
  const getOrders = () => {
    apiCall("/Orders", "get")
      .then((res) => {
        setOrders([
          {
            date: "23-10-1996",
            name: "Olaitan Akinlade",
            bDate: "20-10-2024",
            cName: "20-10-2024",
            model: "2023",
            price: "NGN50,000.00",
            bHours: "20hrs",
          },
        ]);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setTableLoading(false);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {tableLoading ? (
        <TableLoading />
      ) : orders.length === 0 ? (
        <TableEmpty />
      ) : (
        "Table data"
      )}
    </>
  );
};
