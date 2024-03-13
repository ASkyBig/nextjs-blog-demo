"use client";
import { FC, useContext } from "react";
import { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { UserAgentContext } from "@/stores/userAgent";

import styles from "./styles.module.scss";
import { Environment } from "@/constants/enum";
import { useTranslation } from "react-i18next";

interface ILink {
  label: string;
  link?: string;
}

interface ILinkList {
  title: string;
  list: ILink[];
}

interface IQRCode {
  image: StaticImageData;
  text: string;
}

export interface IFooterProps {
  title: string;
  linkList: ILinkList[];
}

export const Footer: FC<IFooterProps> = ({ title, linkList }) => {
  const pathname = usePathname();
  const { userAgent } = useContext(UserAgentContext);
  const { t } = useTranslation();

  const year = new Date().getFullYear();
  const isArticleDetailPage = pathname.includes("/article/");
  const isOnboardingPage = pathname.includes("/onboarding");
  if (isArticleDetailPage || isOnboardingPage) return null;

  return (
    <>
      <div className={styles.copyright}>
        YJ. © Copyright {year}. All Rights Reserved.{" "}
        {userAgent === Environment.pc && (
          <span className={styles.text}>
            ({t("currentDeviceType", { device: "pc" })})
          </span>
        )}
        {userAgent === Environment.ipad && (
          <span className={styles.text}>
            ({t("currentDeviceType", { device: "ipad" })})
          </span>
        )}
        {userAgent === Environment.mobile && (
          <span className={styles.text}>
            {" "}
            ({t("currentDeviceType", { device: "mobile" })})
          </span>
        )}
      </div>
    </>
  );
  // return (
  //   <div className={styles.footer}>
  //     <div className={styles.linkListArea}>
  //       {linkList?.map((item, index) => {
  //         return (
  //           <div className={styles.linkArea} key={`linkArea${index}`}>
  //             <span className={styles.title}>{item.title}</span>
  //             <div className={styles.links}>
  //               {item.list?.map((_item, _index) => {
  //                 return (
  //                   <div
  //                     className={cName({
  //                       [styles.link]: _item.link,
  //                       [styles.disabled]: !_item.link,
  //                     })}
  //                     onClick={(): void => {
  //                       _item.link &&
  //                         window.open(
  //                           _item.link,
  //                           "blank",
  //                           "noopener=yes,noreferrer=yes"
  //                         );
  //                     }}
  //                     key={`link${_index}`}
  //                   >
  //                     {_item.label}
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
