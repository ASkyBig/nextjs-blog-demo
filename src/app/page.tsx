import styles from "./page.module.css";
import { FC } from "react";
import Link from "next/link";
import getArticleData from "./api/home";

const Home: FC = async () => {
  const articleData = await getArticleData();
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.grid}>
        {articleData?.list?.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className={styles.card}>
              <h2>{item.label} &rarr;</h2>
              <p>{item.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
