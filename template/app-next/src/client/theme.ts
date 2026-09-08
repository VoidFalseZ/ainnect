/**
 * Shared between the `useColorMode` hook and the pre-paint script in
 * app/layout.tsx. Kept in its own dependency-free module so the root layout (a
 * server component) can import the key without pulling in a client hook.
 */
export const COLOR_MODE_STORAGE_KEY = "color-theme";

export type ColorMode = "light" | "dark";

export const DEFAULT_COLOR_MODE: ColorMode = "light";
