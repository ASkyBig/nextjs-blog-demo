"use client";
import { ChangeEvent, FC, use, useContext } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment, Themes } from "@/constants/enum";
import Links from "../navLink";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import { useChangeLanguage, useClientTranslation } from "../../../../hook";

import { Select } from "antd";

import withRegistry from "../../../../../withRegistry";

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
  // const { t } = useClientTranslation();
  const { t } = useTranslation();

  const isEn = pathname.includes("en");

  const changeLang = (value: string) => {
    // const rePathname = pathname.replace(/(zh|en)/, e.target.value);
    // router.push(rePathname);
    handleChange(value);
  };

  return (
    <div className={styles.header}>
      <Links dict={data.dict} />
      {/* {data.isMobile && <span className={styles.text}>mobile</span>}
      {!data.isMobile && <span className={styles.text}>pc</span>} */}
      <Select
        defaultValue={currentLocale}
        style={{ width: 120 }}
        onChange={changeLang}
        options={[
          { value: "en", label: "en" },
          { value: "zh", label: "zh" },
        ]}
      />

      {/* <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => changeLang(e)}
        value={isEn ? "en" : "zh"}
      >
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select> */}

      {/* {userAgent === Environment.pc && (
        <span className={styles.text}>
          {t("currentDeviceType", { device: "pc" })}
        </span>
      )}
      {userAgent === Environment.ipad && (
        <span className={styles.text}>
          {t("currentDeviceType", { device: "ipad" })}
        </span>
      )}
      {userAgent === Environment.mobile && (
        <span className={styles.text}>
          {" "}
          {t("currentDeviceType", { device: "mobile" })}
        </span>
      )} */}
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

const HeaderCom = (data: IData) => {
  return withRegistry(<Header {...data} />);
};

export default HeaderCom;

// export default Header;
