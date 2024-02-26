import { FC } from "react";
import { getArticleById } from "@api/articles";
interface IArticleProps {
  id: string;
}

interface IData {
  params: IArticleProps;
}

const Article: FC<IData> = async (data) => {
  const { id } = data.params;
  const res = await getArticleById(data.params.id);

  return (
    <div>
      <div>Article {id}</div>
      <div>{res.content}</div>
    </div>
  );
};

export default Article;
