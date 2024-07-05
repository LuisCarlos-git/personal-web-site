import * as styles from './styles';

export function Header() {
  return (
    <header className={styles.headerWrapperCss()}>
      <img
        src="https://api.multiavatar.com/Starcrasher.png"
        alt=""
        width={50}
      />
      <div className={styles.textWrapperCss()}>
        <span className={styles.titleCss()}>Luis Carlos</span>
        <p className={styles.subtitleCss()}>Frontend Engineer</p>
      </div>
    </header>
  );
}
