# Open SaaS — Next.js (UI-only port)

This is a **front-end-only** port of the Open SaaS Wasp template to a
[Next.js](https://nextjs.org) **App Router** project. It reuses the original
React components, Tailwind v4 theme, and shadcn/ui primitives, but replaces all
Wasp framework features (auth, operations/RPC, jobs, payments webhooks) with
lightweight mock shims so the UI runs with no backend.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How the Wasp → Next mapping works

The original components still `import` from `wasp/*` and `react-router`. Those
specifiers are redirected (via `tsconfig.json` `paths`) to shim modules in
[`src/wasp-shim/`](src/wasp-shim):

| Original import | Shim | What it does |
| --- | --- | --- |
| `wasp/client/router` | `router.tsx` | `routes` registry + `Link` over `next/link` |
| `react-router` | `react-router.tsx` | `Link`/`NavLink`/`useLocation`/`useNavigate`/`useSearchParams` over `next/navigation` |
| `wasp/client/auth` | `auth.tsx` | `useAuth` (mock, logged-out by default) + presentational auth forms |
| `wasp/client/operations` | `operations.ts` | `useQuery` + actions backed by mock data |
| `wasp/entities` | `entities.ts` | Hand-written types mirroring `schema.prisma` |
| `wasp/auth` | `auth-types.ts` | `AuthUser` type |

Mock data lives in [`src/wasp-shim/mock-data.ts`](src/wasp-shim/mock-data.ts).

### Routing

`main.wasp` routes are reimplemented as App Router pages in [`app/`](app). The
root `app/layout.tsx` + `app/AppShell.tsx` replicate the old
`src/client/App.tsx` (conditional NavBar, Toaster, cookie banner). Each
`page.tsx` is a thin `"use client"` wrapper around the ported component.

## Notes / next steps

- `useAuth` returns logged-out so the login/signup pages stay viewable. Flip
  `MOCK_LOGGED_IN` in `src/wasp-shim/auth.tsx` to preview the signed-in navbar.
- Backend-only Wasp files (server `operations.ts`, payment processors, webhooks,
  the analytics job) were intentionally dropped. Re-add real data fetching with
  Next.js Server Actions / Route Handlers where the shims currently return mocks.
- `next.config.ts` sets `typescript.ignoreBuildErrors` / `eslint.ignoreDuringBuilds`
  so the ported code builds while it's being cleaned up.
