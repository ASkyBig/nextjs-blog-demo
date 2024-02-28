"use client";
import { ChangeEvent, FC, useContext } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment, Themes } from "@/constants/enum";
import Links from "../navLink";
import { useRouter, usePathname } from "next/navigation";

import { useChangeLanguage } from "../../../../hook";
export interface INavBarProps {}
interface IData {
  isMobile?: boolean;
  dict: Record<string, string>;
}

const Header = (data: IData) => {
  const pathname = usePathname();

  const { setTheme } = useContext(ThemeContext);
  const { userAgent } = useContext(UserAgentContext);

  const { currentLocale, handleChange } = useChangeLanguage();

  const isEn = pathname.includes("en");

  const changeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    // const rePathname = pathname.replace(/(zh|en)/, e.target.value);
    // router.push(rePathname);
    handleChange(e.target.value);
  };

  return (
    <div className={styles.header}>
      <Links dict={data.dict} />
      {/* {data.isMobile && <span className={styles.text}>mobile</span>}
      {!data.isMobile && <span className={styles.text}>pc</span>} */}

      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => changeLang(e)}
        value={isEn ? "en" : "zh"}
      >
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>

      {userAgent === Environment.pc && (
        <span className={styles.text}>当前是pc端</span>
      )}
      {userAgent === Environment.ipad && (
        <span className={styles.text}>当前是Ipad端</span>
      )}
      {userAgent === Environment.mobile && (
        <span className={styles.text}>当前是移动端</span>
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
