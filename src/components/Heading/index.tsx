import * as styles from './styles';

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className={styles.wrapperCss()}>
      <div>
        <h1 className={styles.headingCss()}>{title}</h1>
        <span className={styles.subtitleCss()}>{subtitle}</span>
      </div>
    </div>
  );
}
