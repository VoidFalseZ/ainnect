"use client";
// App Router equivalent of the original Wasp `src/client/App.tsx` root
// component: conditional NavBar, global Toaster and cookie-consent banner.
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import {
  demoNavigationitems,
  marketingNavigationItems,
} from "@src/client/components/NavBar/constants";
import { NavBar } from "@src/client/components/NavBar/NavBar";
import { CookieConsentBanner } from "@src/client/components/cookie-consent/Banner";
import { Toaster } from "@src/client/components/ui/toaster";
import { Footer } from "@src/landing-page/components/Footer";
import { footerNavigation } from "@src/landing-page/contentSections";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";

  const isMarketingPage = useMemo(
    () => pathname === "/" || pathname === "/pricing",
    [pathname],
  );

  const navigationItems = isMarketingPage
    ? marketingNavigationItems
    : demoNavigationitems;

  const shouldDisplayAppNavBar = useMemo(
    () => pathname !== "/login" && pathname !== "/signup",
    [pathname],
  );

  const isAdminDashboard = useMemo(
    () => pathname.startsWith("/admin"),
    [pathname],
  );

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname]);

  return (
    <>
      <div className="bg-background text-foreground min-h-screen">
        {isAdminDashboard ? (
          children
        ) : (
          <>
            {shouldDisplayAppNavBar && (
              <NavBar navigationItems={navigationItems} />
            )}
            <div className="max-w-(--breakpoint-2xl) mx-auto">{children}</div>
            <Footer footerNavigation={footerNavigation} />
          </>
        )}
      </div>
      <Toaster position="bottom-right" />
      <CookieConsentBanner />
    </>
  );
}
