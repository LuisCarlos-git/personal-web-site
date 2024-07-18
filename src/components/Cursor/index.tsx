'use client';
import AnimatedCursor from 'react-animated-cursor';

import { useIsMobile } from '@/hooks';

export function Cursor() {
  const isMobile = useIsMobile();

  return !isMobile ? (
    <AnimatedCursor
      innerStyle={{
        background: '#7E8285',
      }}
      outerSize={40}
      outerScale={1.2}
      outerStyle={{
        background: 'none',
        border: '2px solid #7E8285',
      }}
    />
  ) : null;
}
