import { Avatar } from '../Avatar';
import * as styles from './styles';

export function Header() {
  return (
    <header className={styles.headerWrapperCss()}>
      <Avatar
        username="Luis Carlos"
        src="https://api.multiavatar.com/Starcrasher.png"
      />
      <div className={styles.textWrapperCss()}>
        <span className={styles.titleCss()}>Luis Carlos</span>
        <p className={styles.subtitleCss()}>Frontend Engineer</p>
      </div>
    </header>
  );
}
