"use client";
import { Suspense } from "react";
import { CheckoutResultPage } from "@src/payment/CheckoutResultPage";

// Wrapped in Suspense because CheckoutResultPage reads search params
// (Next.js requires a Suspense boundary around useSearchParams).
export default function Page() {
  return (
    <Suspense fallback={null}>
      <CheckoutResultPage />
    </Suspense>
  );
}
