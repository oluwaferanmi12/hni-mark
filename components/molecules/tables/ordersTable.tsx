import { apiCall } from "@/api/api";
import { TableEmpty, TableLoading } from "@/components/atoms/tables";
import React from "react";
import { useState, useEffect } from "react";

export const OrdersTable = () => {
  const [tableLoading, setTableLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const getOrders = () => {
    apiCall("/Orders", "get")
      .then((res) => {
        setOrders(res?.data);
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
