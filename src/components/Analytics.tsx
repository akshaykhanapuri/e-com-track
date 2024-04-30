"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analytics } from "@/lib/segment/segment";

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    analytics.page(pathname);
  }, [pathname]);
  return null;
};

export default Analytics;
