"use client";
import { AnalyticsDashboardPage } from "@src/admin/dashboards/analytics/AnalyticsDashboardPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <AnalyticsDashboardPage user={mockUser} />;
}
