import * as RdxAvatar from '@radix-ui/react-avatar';

import { getInitials } from '@/utils/helpers';

import * as styles from './styles';

type AvatarProps = {
  username: string;
  src: string;
  size: 'small' | 'huge';
};

export function Avatar({ src, username, size }: AvatarProps) {
  return (
    <RdxAvatar.Root className={styles.rootCss({ size })}>
      <RdxAvatar.Image
        className={styles.imageCss()}
        src={src}
        alt="Colm Tuite"
      />
      <RdxAvatar.Fallback className={styles.fallbackCss()} delayMs={600}>
        {getInitials(username)}
      </RdxAvatar.Fallback>
    </RdxAvatar.Root>
  );
}
