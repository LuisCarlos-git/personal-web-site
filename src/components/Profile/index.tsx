import React from 'react';

import { Mobile } from './components/mobile';
import { Desktop } from './components/Desktop';

type ProfileProps = {
  component?: 'mobile' | 'desktop';
};

export function Profile({ component = 'mobile' }: ProfileProps) {
  const components: Record<typeof component, React.ReactElement> = {
    mobile: <Mobile />,
    desktop: <Desktop />,
  };

  return components[component];
}
