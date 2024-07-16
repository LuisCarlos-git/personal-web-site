import { useCallback, useEffect, useState } from 'react';

export function useIsMobile(mobileScreenSize = 768) {
  if (window && typeof window.matchMedia !== 'function') {
    throw Error('matchMedia not supported by browser!');
  }
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${mobileScreenSize}px)`).matches
  );

  const checkIsMobile = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    const mediaListener = window.matchMedia(
      `(max-width: ${mobileScreenSize}px)`
    );
    try {
      mediaListener.addEventListener('change', checkIsMobile);
    } catch {
      mediaListener.addListener(checkIsMobile);
    }

    return () => {
      try {
        mediaListener.removeEventListener('change', checkIsMobile);
      } catch {
        mediaListener.removeListener(checkIsMobile);
      }
    };
  }, [checkIsMobile, mobileScreenSize]);

  return isMobile;
}
