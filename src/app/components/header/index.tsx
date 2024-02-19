import { FC } from "react";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.navBar}>
      <a href="http://127.0.0.1:3000/">
        <div className={styles.logoIcon}>header</div>
      </a>
    </div>
  );
};
