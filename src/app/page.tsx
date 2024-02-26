import { FC } from "react";
import { getAllArticles, getArticlesByPageNo } from "@api/articles";
import ArticleCom from "./components/article";
import { sql } from "@vercel/postgres";

const Home: FC = async () => {
  // by default, only need one interface
  const articles = await getArticlesByPageNo(1);

  const totalRes = await getAllArticles();

  // const res = await sql`SELECT * FROM Pets;`;
  // console.log("rows +++++", res);

  return <ArticleCom articles={articles} total={totalRes.length} />;
};

export default Home;
