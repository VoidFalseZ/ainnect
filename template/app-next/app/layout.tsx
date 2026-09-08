import type { Metadata } from "next";
import { COLOR_MODE_STORAGE_KEY } from "@src/client/theme";
import "./globals.css";
import { AppShell } from "./AppShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ainnect.site"),
  title: "ainnect — AI-Powered Business CRM",
  description:
    "ainnect is an AI-powered CRM that helps your business capture leads, manage customer relationships, automate follow-ups, and close more deals.",
  keywords: [
    "crm",
    "ai crm",
    "ai bisnis",
    "sales crm",
    "lead management",
    "business software",
    "ainnect",
  ],
  authors: [{ name: "ainnect" }],
  openGraph: {
    type: "website",
    title: "ainnect — AI-Powered Business CRM",
    siteName: "ainnect",
    url: "https://ainnect.site",
    description:
      "The AI-powered CRM that grows your business — capture leads, automate follow-ups, and close more deals.",
    images: ["https://ainnect.site/banner.png"],
  },
  icons: { icon: "/favicon.ico" },
};

// Runs before React hydrates so a dark-mode visitor never sees a flash of the
// light theme. `useColorMode` keeps this class in sync afterwards; <html> has
// suppressHydrationWarning below because this script mutates its className
// before React compares it against the server-rendered markup.
const applyStoredColorMode = `
try {
  if (JSON.parse(localStorage.getItem(${JSON.stringify(COLOR_MODE_STORAGE_KEY)})) === "dark") {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: applyStoredColorMode }} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
