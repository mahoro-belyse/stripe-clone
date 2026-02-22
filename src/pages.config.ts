// pages.config.ts
/**
 * pages.config.ts - Page routing configuration
 *
 * AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 *
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page.
 */

import Home from "./pages/Home";
import type { ComponentType } from "react";

export interface PagesConfig {
  mainPage: string;
  Pages: Record<string, ComponentType>;
  Layout?: ComponentType<{
    children: React.ReactNode;
    currentPageName?: string;
  }>;
}

// Registered pages
export const PAGES: Record<string, ComponentType> = {
  Home,
};

// Export the config
export const pagesConfig: PagesConfig = {
  mainPage: "Home",
  Pages: PAGES,
};
