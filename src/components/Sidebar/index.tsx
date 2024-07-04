import * as styles from './styles';

import { NavMenu } from './components/NavMenu';

export function Sidebar() {
  return (
    <nav className={styles.wrapperCss()}>
      <NavMenu />
    </nav>
  );
}
