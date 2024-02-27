"use client";
import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment, Themes } from "@/constants/enum";
import Links from "../navLink";

export interface INavBarProps {}
interface IData {
  isMobile?: boolean;
}

const Header = (data: IData) => {
  const { setTheme } = useContext(ThemeContext);
  const { userAgent } = useContext(UserAgentContext);

  return (
    <div className={styles.header}>
      <Links />
      {data.isMobile && <span className={styles.text}>mobile</span>}
      {!data.isMobile && <span className={styles.text}>pc</span>}

      {userAgent === Environment.pc && (
        <span className={styles.text}>当前是pc端样式</span>
      )}
      {userAgent === Environment.ipad && (
        <span className={styles.text}>当前是Ipad端样式</span>
      )}
      {userAgent === Environment.mobile && (
        <span className={styles.text}>当前是移动端样式</span>
      )}
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
