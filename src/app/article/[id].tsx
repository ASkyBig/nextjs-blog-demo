import { NextPage } from "next";

interface IArticleProps {
  id: string;
}

const Article: NextPage<IArticleProps> = ({ id }) => {
  return <div>Article {id}</div>;
};

export default Article;
