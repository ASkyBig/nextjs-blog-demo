import axios from "axios";
import { isEmpty } from "lodash";
import { CMS_DOMAIN, SERVICE_DOMAIN } from "@/utils";
import Axios from "@/utils/axios";

const getLayoutData = () => {
  // return axios.get(`${CMS_DOMAIN}/api/layouts`).then((result) => {
  //   const { linklist, title } = result.data || {};
  //   const res = {
  //     title,
  //     linkList: linklist?.data?.map((item: any) => ({
  //       title: item.title,
  //       list: item?.links?.data?.map((_item: any) => ({
  //         label: _item.label,
  //         link: isEmpty(_item.link) ? "" : _item.link,
  //       })),
  //     })),
  //   };
  // return res;
  // });
  return {
    title: "Demo",
    linkList: [
      {
        title: "了解更多",
        list: [
          { label: "QQ", link: "947821965@qq.com" },
          { label: "react", link: "https://reactjs.org/" },
        ],
      },
      { title: "联系我", list: [{ label: "QQ", link: "947821965@qq.com" }] },
    ],
  };
};

const checkLogin = async () => {
  try {
    const result = await Axios.post("/users/checkLogin");
    return true;
  } catch (err: any) {
    console.log("err", err.response.status);
    return {
      status: err.response.status,
      data: err.response.data,
    };
  }
  // const result = await Axios.post("/users/checkLogin");
  // return result.data;
};
export { checkLogin };
export default getLayoutData;
