"use client";
// Shim for `wasp/client/operations`.
// UI-only: queries resolve to mock data and actions are no-ops that return
// plausible shapes so the ported components run without a backend.
//
// `useQuery(queryFn, args?, options?)` mirrors the Wasp/react-query surface
// the components rely on: { data, isLoading, error, isError, refetch }.
import * as React from "react";
import {
  mockDailyStats,
  mockFiles,
  mockTasks,
  mockUsers,
  mockWeeklyStats,
} from "./mock-data";

// --- query registry --------------------------------------------------------

type Resolver<T = unknown> = (args?: any) => T;
const queryResolvers = new WeakMap<object, Resolver>();

function defineQuery<T>(resolver: Resolver<T>): Resolver<Promise<T>> {
  const fn = (async (args?: any) => resolver(args)) as Resolver<Promise<T>>;
  queryResolvers.set(fn, resolver as Resolver);
  return fn;
}

// --- queries ---------------------------------------------------------------

export const getAllTasksByUser = defineQuery(() => mockTasks);

export const getGptResponses = defineQuery(() => [] as unknown[]);

export const getCustomerPortalUrl = defineQuery<string | null>(() => null);

export const getDailyStats = defineQuery(() => ({
  dailyStats: mockDailyStats,
  weeklyStats: mockWeeklyStats,
}));

export const getPaginatedUsers = defineQuery(() => ({
  users: mockUsers,
  totalPages: 1,
}));

export const getAllFilesByUser = defineQuery(() => mockFiles);

export const getDownloadFileSignedURL = defineQuery<string>(
  () => "https://example.com/mock-download",
);

// --- actions ---------------------------------------------------------------

export async function createTask(args: { description: string }) {
  return {
    id: `task-${Date.now()}`,
    createdAt: new Date(),
    userId: "mock-user-id",
    description: args.description,
    time: "1",
    isDone: false,
  };
}

export async function updateTask(_args: {
  id: string;
  isDone?: boolean;
  time?: string;
}) {
  return { count: 1 };
}

export async function deleteTask(_args: { id: string }) {
  return { count: 1 };
}

const sampleSchedule = {
  tasks: [
    { name: "Deep work", priority: "high" },
    { name: "Admin & email", priority: "medium" },
    { name: "Learning", priority: "low" },
  ],
  taskItems: [
    { description: "Focus block on the main feature", time: 2, taskName: "Deep work" },
    { description: "Clear the inbox", time: 0.5, taskName: "Admin & email" },
    { description: "Read documentation", time: 1, taskName: "Learning" },
  ],
};

export async function generateGptResponse(_args: { hours: number }) {
  // Returns a GeneratedSchedule-shaped object (see demo-ai-app/schedule.ts).
  return sampleSchedule as any;
}

export async function generateCheckoutSession(_planId: string) {
  window.alert(
    "This is a UI-only demo — connect a payment provider to enable checkout.",
  );
  return { sessionUrl: null, sessionId: "mock-session" };
}

export async function createFileUploadUrl(_args: {
  fileType: string;
  fileName: string;
}) {
  return {
    s3UploadUrl: "https://example.com/mock-upload",
    s3UploadFields: {} as Record<string, string>,
    s3Key: `mock/${_args.fileName}`,
  };
}

export async function addFileToDb(_args: {
  s3Key: string;
  fileType: string;
  fileName: string;
}) {
  return { count: 1 };
}

export async function deleteFile(_args: { id: string }) {
  return { count: 1 };
}

export async function updateIsUserAdminById(_args: {
  id: string;
  isAdmin: boolean;
}) {
  return { count: 1 };
}

// --- useQuery --------------------------------------------------------------

type RefetchResult<T> = { status: "success"; data: T; error: null };

export type UseQueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: (Error & { message: string }) | null;
  refetch: () => Promise<RefetchResult<T>>;
};

export function useQuery<T = unknown>(
  queryFn: Resolver<Promise<T>> | object,
  args?: any,
  _options?: { enabled?: boolean },
): UseQueryResult<T> {
  const resolver = queryResolvers.get(queryFn as object);
  const data = (resolver ? resolver(args) : undefined) as T | undefined;

  const refetch = React.useCallback(
    async (): Promise<RefetchResult<T>> => ({
      status: "success",
      data: (resolver ? resolver(args) : undefined) as T,
      error: null,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queryFn, JSON.stringify(args ?? null)],
  );

  return { data, isLoading: false, isError: false, error: null, refetch };
}

// `useAction` is occasionally used to wrap actions; provide a passthrough.
export function useAction<F extends (...a: any[]) => any>(actionFn: F): F {
  return actionFn;
}
