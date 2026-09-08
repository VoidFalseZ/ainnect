import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
  // Always start from `initialValue`, even on the client. Reading localStorage
  // during render would make the first client render disagree with the
  // server-rendered HTML and trip React's hydration mismatch warning.
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  // Gates the write-back effect: until we've read the persisted value, writing
  // would clobber it with `initialValue`.
  const [hasReadStoredValue, setHasReadStoredValue] = useState(false);

  // Adopt the persisted value immediately after mount. Both state updates are
  // batched into a single re-render, so the write-back effect below never sees
  // `hasReadStoredValue` true while `storedValue` is still stale.
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.log(error);
    }
    setHasReadStoredValue(true);
  }, [key]);

  useEffect(() => {
    if (!hasReadStoredValue) {
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, hasReadStoredValue, storedValue]);

  return [storedValue, setStoredValue];
}
