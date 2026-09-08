import { useEffect } from "react";
import {
  COLOR_MODE_STORAGE_KEY,
  DEFAULT_COLOR_MODE,
  type ColorMode,
} from "../theme";
import { useLocalStorage } from "./useLocalStorage";

export function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>(
    COLOR_MODE_STORAGE_KEY,
    DEFAULT_COLOR_MODE,
  );

  useEffect(() => {
    // The class goes on <html>, not <body>, so the pre-paint script in
    // app/layout.tsx can apply it before React hydrates (<body> doesn't exist
    // yet at that point). The `dark` variant is defined as
    // `&:where(.dark, .dark *)`, so either element works.
    const rootClass = window.document.documentElement.classList;

    if (colorMode === "dark") {
      rootClass.add("dark");
    } else {
      rootClass.remove("dark");
    }
  }, [colorMode]);

  return [colorMode, setColorMode] as const;
}
