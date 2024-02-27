import axios from "axios";
import { sql } from "@vercel/postgres";
// import { CMS_DOMAIN, LOCAL_DOMAIN } from "@/utils";

// import { createPool } from "@vercel/postgres";
// const pool = createPool({
//   connectionString: process.env.POSTGRES_URL,
// });

async function getAllArticles() {
  // return axios.get(`${CMS_DOMAIN}/api/articles`).then((result) => {
  //   console.log("result.data.data", result.data.data);
  //   return result.data.data;
  // });
  return [
    {
      title: "article1",
      author: "鲁迅",
      desc: "this is article1",
      content: "hhh",
      link: "http://localhost:1337/api/articles/1",
      bid: "1",
    },
    {
      title: "article2",
      author: "周树人",
      desc: "this is article2",
      content: "666",
      link: "http://localhost:1337/api/articles/2",
      bid: "2",
    },
    {
      title: "article3",
      author: "影魔",
      desc: "这是影魔写的文章",
      content: "我是影魔",
      link: "3",
      bid: "3",
    },
    {
      title: "我的一生",
      author: "幽鬼",
      desc: "这是幽鬼的文章",
      content: "我是幽鬼",
      link: "4",
      bid: "4",
    },
    {
      title: "这是文章5",
      author: "小黑",
      desc: "这是小黑的文章",
      content: "我是小黑",
      link: "5",
      bid: "5",
    },
    {
      title: "文章6",
      author: "神灵",
      desc: "这是神灵的文章",
      content: "我是神灵",
      link: "6",
      bid: "6",
    },
    {
      title: "7",
      author: "白虎",
      desc: "这是白虎的文章",
      content: "我是白虎",
      link: "7",
      bid: "7",
    },
  ];
}

async function getArticlesByPageNo(pageNo: number = 1, pageSize: number = 5) {
  // return axios
  //   .get(
  //     `${CMS_DOMAIN}/api/articles?pagination[page]=${pageNo}&pagination[pageSize]=${pageSize}`
  //   )
  //   .then((result) => {
  //     console.log("result.data.data", result.data.data);

  //     return result.data.data;
  //   });
  try {
    const res = await axios.get(
      `/api/get-blog?pageNo=${pageNo}&pageSize=${pageSize}`
    );
    console.log("res +++++", res.data.rows);
    return res.data.rows;
  } catch (error) {
    console.log("res err +++++", error);
    return [];
  }

  // const pageNumber = pageNo; // Specific page number
  // const offset = (pageNumber - 1) * pageSize;
  // const { rows, fields } =
  //   await sql`SELECT * FROM Blogs LIMIT ${pageSize} OFFSET ${offset};`;
  // console.log("rows ++++++", rows);

  // return [
  //   {
  //     title: "article1",
  //     author: "鲁迅",
  //     desc: "this is article1",
  //     content: "hhh",
  //     link: "http://localhost:1337/api/articles/1",
  //     bid: "1",
  //   },
  //   {
  //     title: "article2",
  //     author: "周树人",
  //     desc: "this is article2",
  //     content: "666",
  //     link: "http://localhost:1337/api/articles/2",
  //     bid: "2",
  //   },
  //   {
  //     title: "article3",
  //     author: "影魔",
  //     desc: "这是影魔写的文章",
  //     content: "我是影魔",
  //     link: "3",
  //     bid: "3",
  //   },
  //   {
  //     title: "我的一生",
  //     author: "幽鬼",
  //     desc: "这是幽鬼的文章",
  //     content: "我是幽鬼",
  //     link: "4",
  //     bid: "4",
  //   },
  //   {
  //     title: "这是文章5",
  //     author: "小黑",
  //     desc: "这是小黑的文章",
  //     content: "我是小黑",
  //     link: "5",
  //     bid: "5",
  //   },
  // ];
}

async function getArticleById(id: string) {
  const { rows, fields } = await sql`SELECT * FROM Blogs where id=${id};`;
  // return axios.get(`/api/articles/${id}`).then((result) => {
  //   console.log("result.data.data", result.data.data);
  //   return result.data.data;
  // });
  return rows[0];
}

export { getAllArticles, getArticlesByPageNo, getArticleById };
