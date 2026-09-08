// Shim for `wasp/auth` (the `AuthUser` type Wasp generates).
import type { User } from "./entities";

export type AuthUser = User;
