import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from './styles';

type LinkProps = {
  label: string;
  isActive?: boolean;
} & NextLinkProps;

export function Link({ label, isActive, ...rest }: LinkProps) {
  return (
    <NextLink {...rest}>
      <span
        className={styles.linkCss({
          active: isActive,
        })}
      >
        {label}
      </span>
    </NextLink>
  );
}
