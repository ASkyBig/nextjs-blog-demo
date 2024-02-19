import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
};

export default Home;
