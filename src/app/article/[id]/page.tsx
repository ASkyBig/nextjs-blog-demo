import { FC } from "react";

interface IArticleProps {
  id: string;
}

interface IData {
  params: IArticleProps;
}

const Article: FC<IData> = (data) => {
  const { id } = data.params;
  return <div>Article {id}</div>;
};

export default Article;
