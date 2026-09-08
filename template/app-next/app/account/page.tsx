"use client";
import { AccountPage } from "@src/user/AccountPage";
import { mockUser } from "@src/wasp-shim/mock-data";

// `authRequired` in Wasp injected the user; UI-only, so we pass the mock user.
export default function Page() {
  return <AccountPage user={mockUser} />;
}
