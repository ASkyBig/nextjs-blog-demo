import styles from "./page.module.css";
import { FC } from "react";
import Link from "next/link";
import { getAllArticles } from "@api/articles";
import { LOCAL_DOMAIN } from "@/utils";

interface IArticle {
  bid: string;
  title: string;
  desc: string;
  link: string;
  content: string;
}

const Home: FC = async () => {
  const articleData = await getAllArticles();

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.grid}>
        {articleData?.map((item: IArticle, index: number) => (
          <Link href={`${LOCAL_DOMAIN}/article/${item.bid}`} key={index}>
            <div className={styles.card}>
              <h2>{item.title} &rarr;</h2>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
