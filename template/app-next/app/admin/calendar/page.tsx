"use client";
import { CalendarPage } from "@src/admin/elements/calendar/CalendarPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <CalendarPage user={mockUser} />;
}
