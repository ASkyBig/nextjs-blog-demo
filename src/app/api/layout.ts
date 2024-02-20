import axios from "axios";
import { CMS_DOMAIN } from "@/utils";
import { isEmpty } from "lodash";

const getLayoutData = () => {
  return axios.get(`${CMS_DOMAIN}/api/layouts`).then((result) => {
    const { linklist, title } = result.data || {};
    return {
      title,
      linkList: linklist?.data?.map((item: any) => ({
        title: item.title,
        list: item?.links?.data?.map((_item: any) => ({
          label: _item.label,
          link: isEmpty(_item.link) ? "" : _item.link,
        })),
      })),
    };
  });
};

export { getLayoutData };
