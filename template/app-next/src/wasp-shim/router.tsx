"use client";
// Shim for `wasp/client/router`.
// Provides the `routes` object (path registry) and a `Link` component that
// maps Wasp's `to` prop onto Next.js's `next/link` `href`.
import NextLink from "next/link";
import * as React from "react";

type RouteParams = Record<string, string | number>;

function makeRoute(path: string) {
  return {
    to: path,
    // Wasp's generated `build()` substitutes path params; for these mostly
    // static routes we just return the path (optionally with a query string).
    build: (opts?: { params?: RouteParams; search?: RouteParams }) => {
      let result = path;
      if (opts?.params) {
        for (const [key, value] of Object.entries(opts.params)) {
          result = result.replace(`:${key}`, String(value));
        }
      }
      if (opts?.search) {
        const qs = new URLSearchParams(
          Object.entries(opts.search).map(([k, v]) => [k, String(v)]),
        ).toString();
        if (qs) result += `?${qs}`;
      }
      return result;
    },
  };
}

export const routes = {
  LandingPageRoute: makeRoute("/"),
  LoginRoute: makeRoute("/login"),
  SignupRoute: makeRoute("/signup"),
  RequestPasswordResetRoute: makeRoute("/request-password-reset"),
  PasswordResetRoute: makeRoute("/password-reset"),
  EmailVerificationRoute: makeRoute("/email-verification"),
  AccountRoute: makeRoute("/account"),
  DemoAppRoute: makeRoute("/demo-app"),
  PricingPageRoute: makeRoute("/pricing"),
  CheckoutResultRoute: makeRoute("/checkout"),
  FileUploadRoute: makeRoute("/file-upload"),
  AdminRoute: makeRoute("/admin"),
  AdminUsersRoute: makeRoute("/admin/users"),
  AdminSettingsRoute: makeRoute("/admin/settings"),
  AdminCalendarRoute: makeRoute("/admin/calendar"),
  AdminUIButtonsRoute: makeRoute("/admin/ui/buttons"),
  AdminMessagesRoute: makeRoute("/admin/messages"),
  NotFoundRoute: makeRoute("/404"),
} as const;

type LinkProps = Omit<
  React.ComponentProps<typeof NextLink>,
  "href"
> & {
  to: string;
  // Accepted for API-compatibility with Wasp's Link (a thin wrapper over
  // react-router). `replace` maps to Next's `replace`.
  replace?: boolean;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ to, children, ...props }, ref) {
    return (
      <NextLink ref={ref} href={to} {...props}>
        {children}
      </NextLink>
    );
  },
);
