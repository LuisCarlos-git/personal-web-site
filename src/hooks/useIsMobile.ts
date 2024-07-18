import * as React from 'react';

export function useIsMobile(mobileScreenSize = 768) {
  const [isMobile, setIsMobile] = React.useState(false);

  const checkIsMobile = React.useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      throw Error('matchMedia not supported by browser!');
    }

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
