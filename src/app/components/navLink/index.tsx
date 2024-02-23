"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <Link
        className={`${styles.link} ${
          pathname === "/" ? `${styles.link_active}` : ""
        }`}
        href="/"
      >
        Home
      </Link>

      <Link
        className={`${styles.link} ${
          pathname === "/about" ? `${styles.link_active}` : ""
        }`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
