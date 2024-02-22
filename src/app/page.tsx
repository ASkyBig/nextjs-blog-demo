import styles from "./page.module.css";
import { FC } from "react";
import { getAllArticles, getArticlesByPageNo } from "@api/articles";
import ArticleCom from "./components/article";

const Home: FC = async () => {
  // by default, only need one interface
  const articles = await getArticlesByPageNo(1);
  const totalRes = await getAllArticles();

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <ArticleCom articles={articles} total={totalRes.length} />
    </main>
  );
};

export default Home;
