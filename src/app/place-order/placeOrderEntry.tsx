"use client";
import React, { useEffect } from "react";

type PlaceOrderEntryProps = {
  deleteUserCart: () => Promise<void>;
};

const PlaceOrderEntry = ({ deleteUserCart }: PlaceOrderEntryProps) => {
  useEffect(() => {
    (async () => {
      await deleteUserCart();
    })();
  }, []);
  return (
    <div>
      <h1 className="font-sans flex text-wrap sm:justify-center">
        Thank you for your awesomeness!
      </h1>
    </div>
  );
};

export default PlaceOrderEntry;
