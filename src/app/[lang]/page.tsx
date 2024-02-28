import { FC } from "react";
// import { getAllArticles, getArticlesByPageNo } from "@api/articles";
import ArticleCom from "./components/article";
import { sql } from "@vercel/postgres";
import { IArticle } from "./components/article/index";

const pageSize = 5; // Number of records per page
const pageNumber = 1; // Specific page number
const offset = (pageNumber - 1) * pageSize;

const Home: FC<{
  params: { lang: string };
}> = async ({ params }) => {
  // by default, only need one interface
  // const articles = await getArticlesByPageNo(1);
  // const totalRes = await getAllArticles();

  const { rows, fields }: { rows: IArticle[]; fields: any } =
    await sql`SELECT * FROM Blogs LIMIT ${pageSize} OFFSET ${offset};`;

  const { rows: CountRows } =
    await sql`SELECT COUNT(*) AS total_count FROM Blogs;`;

  return (
    <ArticleCom
      articles={rows}
      total={CountRows[0].total_count}
      lang={params.lang}
    />
  );
};

export default Home;
