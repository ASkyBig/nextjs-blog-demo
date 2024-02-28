"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

import { useClientTranslation } from "../../../../hook";

export default function Links({ dict }: any) {
  const pathname = usePathname();
  const router = useRouter();
  const isEn = /^\/en/.test(usePathname());

  const { t } = useClientTranslation();

  const isHomePath = /^\/(zh|en)$/.test(pathname);
  const isAboutPath = /^\/(zh|en)\/about$/.test(pathname);
  const aboutPath = isEn ? "/en/about" : "/zh/about";
  const homePath = isEn ? "/en" : "/zh";

  return (
    <nav className={styles.container}>
      <Link
        className={`${styles.link} ${
          isHomePath ? `${styles.link_active}` : ""
        }`}
        href={homePath}
      >
        {/* {dict.home} */}
        {t("home")}
      </Link>

      <Link
        className={`${styles.link} ${
          isAboutPath ? `${styles.link_active}` : ""
        }`}
        href={aboutPath}
      >
        {/* {dict.about} */}
        {t("about")}
      </Link>
      {/* <div
        className={`${styles.link} ${
          isHomePath ? `${styles.link_active}` : ""
        }`}
        onClick={() => {
          if (isEn) router.push("/en");
          else router.push("/zh");
        }}
      >
        {dict.home}
      </div>

      <div
        className={`${styles.link} ${
          isAboutPath ? `${styles.link_active}` : ""
        }`}
        onClick={() => {
          if (isEn) router.push("/en/about");
          else router.push("/zh/about");
        }}
      >
        {dict.about}
      </div> */}
    </nav>
  );
}
