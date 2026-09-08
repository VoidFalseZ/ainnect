// Centralized mock data used by the UI-only shims. Swap these out for real
// data fetching (server actions / route handlers) when wiring up a backend.
import type {
  DailyStats,
  File as FileEntity,
  PageViewSource,
  Task,
  User,
} from "./entities";

export const mockUser: User = {
  id: "mock-user-id",
  createdAt: new Date("2024-01-01T00:00:00Z"),
  email: "demo@opensaas.sh",
  username: "demo",
  isAdmin: true,
  paymentProcessorUserId: null,
  lemonSqueezyCustomerPortalUrl: null,
  subscriptionStatus: null,
  subscriptionPlan: null,
  datePaid: null,
  credits: 3,
};

export const mockTasks: Task[] = [
  {
    id: "task-1",
    createdAt: new Date(),
    userId: mockUser.id,
    description: "Prepare the quarterly report",
    time: "2",
    isDone: false,
  },
  {
    id: "task-2",
    createdAt: new Date(),
    userId: mockUser.id,
    description: "Review pull requests",
    time: "1",
    isDone: true,
  },
];

export const mockFiles: FileEntity[] = [
  {
    id: "file-1",
    createdAt: new Date(),
    userId: mockUser.id,
    name: "example-document.pdf",
    type: "application/pdf",
    s3Key: "mock/example-document.pdf",
  },
];

const mockSources: PageViewSource[] = [
  { name: "Google", date: new Date(), dailyStatsId: 1, visitors: 1200 },
  { name: "Twitter / X", date: new Date(), dailyStatsId: 1, visitors: 640 },
  { name: "Direct", date: new Date(), dailyStatsId: 1, visitors: 410 },
  { name: "Hacker News", date: new Date(), dailyStatsId: 1, visitors: 180 },
];

export const mockDailyStats: DailyStats = {
  id: 1,
  date: new Date(),
  totalViews: 2430,
  prevDayViewsChangePercent: "12.5",
  userCount: 350,
  paidUserCount: 48,
  userDelta: 12,
  paidUserDelta: 3,
  totalRevenue: 4820.5,
  totalProfit: 3110.25,
  sources: mockSources,
};

export const mockWeeklyStats: DailyStats[] = Array.from({ length: 7 }).map(
  (_, i) => ({
    ...mockDailyStats,
    id: i + 1,
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000),
    totalViews: 1800 + i * 120,
    totalRevenue: 3800 + i * 180,
    totalProfit: 2400 + i * 130,
  }),
);

export const mockUsers: User[] = Array.from({ length: 8 }).map((_, i) => ({
  ...mockUser,
  id: `mock-user-${i}`,
  email: `user${i}@opensaas.sh`,
  username: `user${i}`,
  isAdmin: i === 0,
  subscriptionStatus: i % 3 === 0 ? "active" : null,
  subscriptionPlan: i % 3 === 0 ? "pro" : null,
}));
