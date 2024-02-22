"use client";
import styles from "./page.module.css";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { getAllArticles, getArticlesByPageNo } from "@api/articles";
import { LOCAL_DOMAIN } from "@/utils";
import { Pagination } from "antd";

interface IArticle {
  bid: string;
  title: string;
  desc: string;
  link: string;
  content: string;
}

const Home: FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    handlePageChange(1);
    getAllArticles().then((res): void => {
      setTotal(res.length);
    });
  }, []);

  const handlePageChange = (pageNo: number) => {
    getArticlesByPageNo(pageNo).then((res) => setArticles(res.data));
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <div className={styles.grid}>
        {articles?.map((item: IArticle, index: number) => (
          <Link href={`${LOCAL_DOMAIN}/article/${item.bid}`} key={index}>
            <div className={styles.card}>
              <h2>{item.title} &rarr;</h2>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        total={total}
        defaultPageSize={5}
        onChange={handlePageChange}
      />
    </main>
  );
};

export default Home;
