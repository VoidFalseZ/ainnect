// Shim for `wasp/entities`.
// In the original Wasp app these types are generated from schema.prisma.
// Here they are hand-written to match the Prisma models, so the ported UI
// components type-check without a backend.

export type User = {
  id: string;
  createdAt: Date;
  email: string | null;
  username: string | null;
  isAdmin: boolean;
  paymentProcessorUserId: string | null;
  lemonSqueezyCustomerPortalUrl: string | null;
  subscriptionStatus: string | null;
  subscriptionPlan: string | null;
  datePaid: Date | null;
  credits: number;
};

export type GptResponse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
};

export type Task = {
  id: string;
  createdAt: Date;
  userId: string;
  description: string;
  time: string;
  isDone: boolean;
};

export type File = {
  id: string;
  createdAt: Date;
  userId: string;
  name: string;
  type: string;
  s3Key: string;
};

export type DailyStats = {
  id: number;
  date: Date;
  totalViews: number;
  prevDayViewsChangePercent: string;
  userCount: number;
  paidUserCount: number;
  userDelta: number;
  paidUserDelta: number;
  totalRevenue: number;
  totalProfit: number;
  sources: PageViewSource[];
};

export type PageViewSource = {
  name: string;
  date: Date;
  dailyStatsId: number | null;
  visitors: number;
};

export type Logs = {
  id: number;
  createdAt: Date;
  message: string;
  level: string;
};

export type ContactFormMessage = {
  id: string;
  createdAt: Date;
  userId: string;
  content: string;
  isRead: boolean;
  repliedAt: Date | null;
};
