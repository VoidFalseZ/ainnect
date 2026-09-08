"use client";
import { SettingsPage } from "@src/admin/elements/settings/SettingsPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <SettingsPage user={mockUser} />;
}
