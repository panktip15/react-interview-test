import { useState, useCallback, useEffect } from "react";

// Common functionality used by all storage hooks
export default function useStorage(key, initialValue) {
  // eslint-disable-next-line no-undef
  const storage = window.localStorage;
  // Use state so that changes cause the page to re-render
  const [value, setValue] = useState(() => {
    try {
      const json = storage.getItem(key);
      if (json !== null) {
        return JSON.parse(json);
      }
    } catch {
      //no op
    }

    // Either the value isn't in storage yet or JSON parsing failed, so
    // set to the initial value in both places
    storage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  // Set in both places
  const setValueAndStore = useCallback(
    (val) => {
      setValue(val);
      storage.setItem(key, JSON.stringify(val));
    },
    [setValue, storage, key]
  );

  useEffect(() => {
    setValueAndStore(val);
  }, [key, setValue]);

  return [value, setValueAndStore];
}
