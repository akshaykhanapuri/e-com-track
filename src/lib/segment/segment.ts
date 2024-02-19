import { AnalyticsBrowser } from "@segment/analytics-next";
import { envClient } from "../envClient";
import { Analytics } from "@segment/analytics-node";

export const analytics = AnalyticsBrowser.load({
  writeKey: envClient.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
});

export const analyticsServer = new Analytics({
  writeKey: envClient.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
});
