import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContex";
import { base44 } from "../api/base44Client";
import { pagesConfig } from "../pages.config";

export default function NavigationTracker(): null {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { Pages, mainPage } = pagesConfig;
  const mainPageKey: string = mainPage ?? Object.keys(Pages)[0];

  useEffect(() => {
    const pathname = location.pathname;
    let pageName: string | null;

    if (pathname === "/" || pathname === "") {
      pageName = mainPageKey;
    } else {
      const pathSegment = pathname.replace(/^\//, "").split("/")[0];
      const pageKeys = Object.keys(Pages);
      const matchedKey = pageKeys.find(
        (key) => key.toLowerCase() === pathSegment.toLowerCase(),
      );
      pageName = matchedKey || null;
    }

    if (isAuthenticated && pageName) {
      base44.appLogs.logUserInApp(pageName).catch(() => {
        // Fail silently
      });
    }
  }, [location, isAuthenticated, Pages, mainPageKey]);

  return null;
}
