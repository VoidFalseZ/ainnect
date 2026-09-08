"use client";
import { ButtonsPage } from "@src/admin/elements/ui-elements/ButtonsPage";
import { mockUser } from "@src/wasp-shim/mock-data";

export default function Page() {
  return <ButtonsPage user={mockUser} />;
}
