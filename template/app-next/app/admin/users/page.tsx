"use client";
import { UsersDashboardPage } from "@src/admin/dashboards/users/UsersDashboardPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <UsersDashboardPage user={mockUser} />;
}
