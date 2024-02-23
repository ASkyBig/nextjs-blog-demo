"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Pagination } from "antd";
import { getArticlesByPageNo } from "@/src/app/api/articles";

interface IArticle {
  bid: string;
  title: string;
  desc: string;
  link: string;
  content: string;
}

interface IArticleComProps {
  articles: IArticle[];
  total: number;
}

const ArticleCom = (data: IArticleComProps) => {
  const [articles, setArticles] = useState(data.articles || []);
  const [total, setTotal] = useState(data.total || 0);

  const handlePageChange = (pageNo: number) => {
    getArticlesByPageNo(pageNo).then((res) => {
      setArticles(res);
    });
  };

  return (
    <div>
      <div className={styles.grid}>
        {articles?.map((item: IArticle, index: number) => (
          <Link href={`/article/${item.bid}`} key={index}>
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
    </div>
  );
};

export default ArticleCom;
