import React from "react";
import { getCart } from "@/lib/db/cart";
import { deleteUserCart } from "./actions";
import PlaceOrderEntry from "./placeOrderEntry";
import AnalyticsOrderCompleted from "@/components/AnalyticsOrderCompleted";

const PlaceOrderPage = async () => {
  const cart = await getCart();
  return (
    <>
      <AnalyticsOrderCompleted cart={cart} />
      <PlaceOrderEntry deleteUserCart={deleteUserCart} />
    </>
  );
};

export default PlaceOrderPage;
