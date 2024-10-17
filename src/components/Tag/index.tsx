import * as styles from './styles';
import { colorsMapper, Technologies } from './tags.mapper';

type TagProps = {
  text: string;
  technology: Technologies;
};

export function Tag({ text, technology }: TagProps) {
  return (
    <div
      style={{
        background: colorsMapper[technology],
      }}
      className={styles.tagCss()}
    >
      {text}
    </div>
  );
}
