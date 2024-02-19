"use client";
import React from "react";
import { useEffect } from "react";
import { analytics } from "@/lib/segment/segment";
import { ShoppingCart } from "@/lib/db/cart";

type AnalyticsOrderCompltedProps = {
  cart: ShoppingCart | null;
};

const AnalyticsOrderCompleted = ({ cart }: AnalyticsOrderCompltedProps) => {
  useEffect(() => {
    analytics.track("Order Completed", {
      cart_id: cart?.id,
      products: cart?.items.map((item) => {
        return {
          product_id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          image_url: item.product.imageUrl,
          quantity: item.quantity,
        };
      }),
      cart_price: cart?.subtotal,
      cart_size: cart?.size,
      discount: cart?.subtotal
        ? cart.subtotal - cart.subtotal * 0.1
        : cart?.subtotal,
    });
  });
  return null;
};

export default AnalyticsOrderCompleted;
