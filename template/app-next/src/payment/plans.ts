export enum SubscriptionStatus {
  PastDue = "past_due",
  CancelAtPeriodEnd = "cancel_at_period_end",
  Active = "active",
  Deleted = "deleted",
}

export enum PaymentPlanId {
  Pro = "pro",
  ProPlus = "pro_plus",
  Max = "max",
}

export interface PaymentPlan {
  id: PaymentPlanId;
  effect: PaymentPlanEffect;
}

export type PaymentPlanEffect =
  | { kind: "subscription" }
  | { kind: "credits"; amount: number };

export const paymentPlans = {
  [PaymentPlanId.Pro]: {
    id: PaymentPlanId.Pro,
    effect: { kind: "subscription" },
  },
  [PaymentPlanId.ProPlus]: {
    id: PaymentPlanId.ProPlus,
    effect: { kind: "subscription" },
  },
  [PaymentPlanId.Max]: {
    id: PaymentPlanId.Max,
    effect: { kind: "subscription" },
  },
} as const satisfies Record<PaymentPlanId, PaymentPlan>;

export function prettyPaymentPlanName(planId: PaymentPlanId): string {
  const planToName: Record<PaymentPlanId, string> = {
    [PaymentPlanId.Pro]: "Pro",
    [PaymentPlanId.ProPlus]: "Pro+",
    [PaymentPlanId.Max]: "Max",
  };
  return planToName[planId];
}

export function parsePaymentPlanId(planId: string): PaymentPlanId {
  if ((Object.values(PaymentPlanId) as string[]).includes(planId)) {
    return planId as PaymentPlanId;
  } else {
    throw new Error(`Invalid PaymentPlanId: ${planId}`);
  }
}

export function getSubscriptionPaymentPlanIds(): PaymentPlanId[] {
  return Object.values(PaymentPlanId).filter(
    (planId) => paymentPlans[planId].effect.kind === "subscription",
  );
}
