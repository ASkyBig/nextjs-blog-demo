"use client";
import { ChangeEvent, FC, use, useContext, useRef } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment, Themes } from "@/constants/enum";
import Links from "../navLink";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import { useChangeLanguage, useClientTranslation } from "../../../../hook";

import { Select } from "antd";

import withRegistry from "@withRegistry";
import { Popup, IPopupRef } from "../popup";
import useSupportWebp from "@/src/hooks/useSupportWebp";
import cName from "classnames";

export interface INavBarProps {}
// interface IData {
//   isMobile?: boolean;
// }

const Header = () => {
  const pathname = usePathname();

  const { setTheme } = useContext(ThemeContext);
  const { userAgent } = useContext(UserAgentContext);

  const { currentLocale, handleChange } = useChangeLanguage();
  const isSupportWebp = useSupportWebp();

  const { t } = useTranslation();
  const popupRef = useRef<IPopupRef>(null);

  const isEn = pathname.includes("en");

  const changeLang = (value: string) => {
    handleChange(value);
  };

  return (
    <div
      className={cName({
        [styles.header]: true,
        [styles.headerWebp]: isSupportWebp,
      })}
    >
      <Links />

      <Select
        defaultValue={currentLocale}
        style={{ width: 120 }}
        onChange={changeLang}
        options={[
          { value: "en", label: "en" },
          { value: "zh", label: "zh" },
        ]}
      />

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
      <div
        className={styles.popupText}
        onClick={(): void => {
          console.log("popupRef", popupRef.current);

          popupRef.current?.open();
        }}
      >
        {t("popup")}
      </div>
      <Popup ref={popupRef}>
        <div>这是一个弹窗</div>
      </Popup>
    </div>
  );
};

const HeaderCom = (data: IData) => {
  return withRegistry(<Header {...data} />);
};

export default HeaderCom;

// export default Header;
