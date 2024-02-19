"use client";
import { useEffect } from "react";
import { analytics } from "@/lib/segment/segment";

type AnalyticsProductsSearchedProps = {
  query: string;
};

const AnalyticsProductsSearched = ({
  query,
}: AnalyticsProductsSearchedProps) => {
  useEffect(() => {
    analytics.track("Products Searched", {
      query,
    });
  });
  return null;
};

export default AnalyticsProductsSearched;
