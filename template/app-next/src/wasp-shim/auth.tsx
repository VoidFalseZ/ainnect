"use client";
// Shim for `wasp/client/auth`.
// UI-only: there is no real authentication. `useAuth` returns a logged-out
// state by default so the login/signup pages stay viewable; flip
// MOCK_LOGGED_IN to true to preview the signed-in navbar/dropdown UI.
// The auth forms are presentational only and do not submit anywhere.
import * as React from "react";
import type { User } from "./entities";
import { mockUser } from "./mock-data";

const MOCK_LOGGED_IN = false;

type UseAuthResult = {
  data: User | null;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export function useAuth(): UseAuthResult {
  return {
    data: MOCK_LOGGED_IN ? mockUser : null,
    isLoading: false,
    isError: false,
    error: null,
  };
}

export function logout() {
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
}

// ---------------------------------------------------------------------------
// Presentational auth forms (mirror the look of Wasp's generated Auth UI).
// ---------------------------------------------------------------------------

function AuthFormShell({
  children,
  submitLabel,
}: {
  children: React.ReactNode;
  submitLabel: string;
}) {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.alert(
          "This is a UI-only demo — wire up your auth provider to enable it.",
        );
      }}
    >
      {children}
      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 w-full rounded-md px-4 py-2 text-sm font-semibold transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-left">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-700">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

export function LoginForm() {
  return (
    <AuthFormShell submitLabel="Log in">
      <Field label="E-mail" type="email" placeholder="you@example.com" />
      <Field label="Password" type="password" placeholder="••••••••" />
    </AuthFormShell>
  );
}

export function SignupForm() {
  return (
    <AuthFormShell submitLabel="Sign up">
      <Field label="E-mail" type="email" placeholder="you@example.com" />
      <Field label="Password" type="password" placeholder="••••••••" />
    </AuthFormShell>
  );
}

export function ForgotPasswordForm() {
  return (
    <AuthFormShell submitLabel="Send reset email">
      <Field label="E-mail" type="email" placeholder="you@example.com" />
    </AuthFormShell>
  );
}

export function ResetPasswordForm() {
  return (
    <AuthFormShell submitLabel="Reset password">
      <Field label="New password" type="password" placeholder="••••••••" />
      <Field
        label="Confirm new password"
        type="password"
        placeholder="••••••••"
      />
    </AuthFormShell>
  );
}

export function VerifyEmailForm() {
  return (
    <div className="text-center text-sm text-gray-700 dark:text-gray-700">
      Your email verification link would be handled here.
    </div>
  );
}
