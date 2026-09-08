import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives inside the Open SaaS monorepo; pin the tracing root so Next
  // doesn't pick the repo-root lockfile.
  outputFileTracingRoot: process.cwd(),
  // Typechecking is enabled: the port is type-clean. ESLint is still skipped
  // during builds for the ported Wasp code; flip it on once lint is clean too.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
