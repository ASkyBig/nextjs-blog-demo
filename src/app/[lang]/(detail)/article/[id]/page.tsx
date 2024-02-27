import { FC } from "react";
import { getArticleById } from "@api/articles";
import { Metadata } from "next";
interface IArticleProps {
  id: string;
}

interface IData {
  params: IArticleProps;
}
// if no metadata here, use the default metadata in app/layout.tsx
// export const metadata: Metadata = {
//   title: "title of article",
//   description: "article desc",
// };

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
