"use client";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import cName from "classnames";

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
  return (
    <div className={styles.footer}>
      <div className={styles.topArea}>
        <h1 className={styles.footerTitle}>{title}</h1>
        <div className={styles.linkListArea}>
          {linkList?.map((item, index) => {
            return (
              <div className={styles.linkArea} key={`linkArea${index}`}>
                <span className={styles.title}>{item.title}</span>
                <div className={styles.links}>
                  {item.list?.map((_item, _index) => {
                    return (
                      <div
                        className={cName({
                          [styles.link]: _item.link,
                          [styles.disabled]: !_item.link,
                        })}
                        onClick={(): void => {
                          _item.link &&
                            window.open(
                              _item.link,
                              "blank",
                              "noopener=yes,noreferrer=yes"
                            );
                        }}
                        key={`link${_index}`}
                      >
                        {_item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.codeArea}></div>
      </div>
    </div>
  );
};
