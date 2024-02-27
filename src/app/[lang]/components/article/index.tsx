"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Pagination } from "antd";
import { getArticlesByPageNo } from "@api/articles";

export interface IArticle {
  id: string;
  bid?: string;
  title: string;
  desc: string;
  link?: string;
  content: string;
  author: string;
}

interface IArticleComProps {
  articles: IArticle[];
  total: number;
  lang: string;
}

const ArticleCom = (data: IArticleComProps) => {
  const [articles, setArticles] = useState(data.articles || []);
  const [total, setTotal] = useState(data.total || 0);

  const handlePageChange = (pageNo: number): void => {
    getArticlesByPageNo(pageNo).then((res) => {
      setArticles(res);
    });
  };

  return (
    <div>
      <div className={styles.grid}>
        {articles?.map((item: IArticle, index: number) => (
          <Link href={`${data.lang}/article/${item.id}`} key={index}>
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
