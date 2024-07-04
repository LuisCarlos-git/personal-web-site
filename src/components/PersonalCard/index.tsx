import * as styles from './styles';

export function PersonalCard() {
  return (
    <div className={styles.personalDataCss()}>
      <img
        src="https://api.multiavatar.com/Starcrasher.png"
        alt=""
        width={120}
      />
      <div className={styles.textWrapperCss()}>
        <span className={styles.titleCss()}>Luis Carlos</span>
        <p className={styles.subtitleCss()}>luiscarlosbastos1107@gmail.com</p>
      </div>
    </div>
  );
}
