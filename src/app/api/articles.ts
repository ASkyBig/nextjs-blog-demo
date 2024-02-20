import axios from "axios";
import { CMS_DOMAIN } from "@/utils";

async function getAllArticles() {
  return axios.get(`${CMS_DOMAIN}/api/articles`).then((result) => {
    return result.data.data;
  });
}

export { getAllArticles };
