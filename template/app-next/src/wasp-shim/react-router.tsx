"use client";
// Shim for `react-router` backed by Next.js App Router primitives.
// Only the surface used by the ported Open SaaS UI is implemented:
// Link, NavLink, Outlet, useLocation, useNavigate, useSearchParams.
import NextLink from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
} from "next/navigation";
import * as React from "react";

export type To = string;

type NavigateOptions = { replace?: boolean };

export function useNavigate() {
  const router = useRouter();
  return React.useCallback(
    (to: To | number, options?: NavigateOptions) => {
      if (typeof to === "number") {
        // react-router supports navigate(-1) etc.
        if (to < 0) router.back();
        else router.forward();
        return;
      }
      if (options?.replace) router.replace(to);
      else router.push(to);
    },
    [router],
  );
}

export function useLocation() {
  const pathname = usePathname();
  // NOTE: We intentionally read search/hash from `window` (client-only) rather
  // than `useSearchParams()` so that components using `useLocation` (NavBar,
  // useIsLandingPage, ...) still server-render instead of triggering a
  // client-side-rendering bailout to the nearest Suspense boundary.
  const [{ search, hash }, setLoc] = React.useState({ search: "", hash: "" });

  React.useEffect(() => {
    setLoc({
      search: window.location.search,
      hash: window.location.hash,
    });
  }, [pathname]);

  return {
    pathname: pathname ?? "/",
    search,
    hash,
    state: null,
    key: "default",
  };
}

export function useSearchParams(): [
  URLSearchParams,
  (next: URLSearchParams | Record<string, string>) => void,
] {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = React.useCallback(
    (next: URLSearchParams | Record<string, string>) => {
      const params =
        next instanceof URLSearchParams
          ? next
          : new URLSearchParams(next);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname],
  );

  return [new URLSearchParams(searchParams.toString()), setSearchParams];
}

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  to: To;
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

type NavLinkRenderProps = { isActive: boolean; isPending: boolean };
type NavLinkProps = Omit<
  React.ComponentProps<typeof NextLink>,
  "href" | "className" | "children"
> & {
  to: To;
  end?: boolean;
  replace?: boolean;
  className?: string | ((props: NavLinkRenderProps) => string);
  children?: React.ReactNode | ((props: NavLinkRenderProps) => React.ReactNode);
};

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink({ to, end, className, children, ...props }, ref) {
    const pathname = usePathname() ?? "/";
    const isActive = end
      ? pathname === to
      : to !== "#" && pathname.startsWith(to);
    const renderProps: NavLinkRenderProps = { isActive, isPending: false };

    const resolvedClassName =
      typeof className === "function" ? className(renderProps) : className;
    const resolvedChildren =
      typeof children === "function" ? children(renderProps) : children;

    return (
      <NextLink ref={ref} href={to} className={resolvedClassName} {...props}>
        {resolvedChildren}
      </NextLink>
    );
  },
);

// Not used after the App Router migration (layouts replace <Outlet/>), but
// kept for API-compatibility.
export function Outlet({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
