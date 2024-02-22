import axios from "axios";
import { CMS_DOMAIN } from "@/utils";

async function getAllArticles() {
  return axios.get(`${CMS_DOMAIN}/api/articles`).then((result) => {
    return result.data.data;
  });
}

async function getArticlesByPageNo(pageNo: number = 1, pageSize: number = 5) {
  return axios
    .get(
      `${CMS_DOMAIN}/api/articles?pagination[page]=${pageNo}&pagination[pageSize]=${pageSize}`
    )
    .then((result) => {
      return result.data.data;
    });
}

export { getAllArticles, getArticlesByPageNo };
