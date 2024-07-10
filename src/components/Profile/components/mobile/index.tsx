import { Avatar } from '@/components/Avatar';

import * as styles from './styles';

export function Mobile() {
  return (
    <div className={styles.wrapperCss()}>
      <Avatar
        size="small"
        username="Luis Carlos"
        src="https://api.multiavatar.com/Starcrasher.png"
      />
      <div className={styles.textWrapperCss()}>
        <span className={styles.titleCss()}>Luis Carlos</span>
        <p className={styles.subtitleCss()}>Frontend Engineer</p>
      </div>
    </div>
  );
}
