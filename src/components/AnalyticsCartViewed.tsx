"use client";
import React from "react";
import { analytics } from "@/lib/segment/segment";
import { useEffect } from "react";
import { ShoppingCart } from "@/lib/db/cart";

type AnalyticsCartViewedProps = {
  cart: ShoppingCart | null;
};

const AnalyticsCartViewed = ({ cart }: AnalyticsCartViewedProps) => {
  useEffect(() => {
    analytics.track("Cart Viewed", {
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
    });
  });
  return null;
};

export default AnalyticsCartViewed;
