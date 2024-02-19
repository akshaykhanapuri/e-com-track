"use client";
import { analytics } from "@/lib/segment/segment";
import { useEffect } from "react";

type AnalyticsProductViewedProps = {
  product_id: string;
  name: string;
  price: number;
  image_url: string;
};

const AnalyticsProductViewed = ({
  product_id,
  name,
  price,
  image_url,
}: AnalyticsProductViewedProps) => {
  const url = window.location.href;
  useEffect(() => {
    analytics.track("Product Clicked", {
      product_id,
      name,
      price,
      url,
      image_url,
      currency: "usd",
    });

    analytics.track("Product Viewed", {
      product_id,
      name,
      price,
      url,
      image_url,
      currency: "usd",
    });
  });
  return null;
};

export default AnalyticsProductViewed;
