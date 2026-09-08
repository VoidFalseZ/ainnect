"use client";
import { AdminMessages } from "@src/admin/dashboards/messages/MessagesPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <AdminMessages user={mockUser} />;
}
