import { AnalyticsBrowser } from "@segment/analytics-next";
import { envClient } from "../envClient";

export const analytics = AnalyticsBrowser.load({
  writeKey: envClient.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
});
