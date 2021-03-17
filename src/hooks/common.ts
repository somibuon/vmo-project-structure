import { useEffect } from 'react';

export function useLongPolling(fn: () => void, time = 5000) {
  useEffect(() => {
    const interval = setInterval(fn, time);
    return () => clearInterval(interval);
  }, [fn, time]);
}
