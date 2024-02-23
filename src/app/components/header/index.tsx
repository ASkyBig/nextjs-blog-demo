"use client";
import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { Themes } from "@/constants/enum";
import Links from "../navLink";

export interface INavBarProps {}

const Header: FC = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <Links />
      <div
        className={styles.themeIcon}
        onClick={(): void => {
          if (localStorage.getItem("theme") === Themes.light) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}
      ></div>
    </div>
  );
};

export default Header;
