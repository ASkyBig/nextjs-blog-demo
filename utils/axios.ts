import axios from "axios";
import { SERVICE_DOMAIN } from "./index";

// 创建一个自定义的Axios实例
const Axios = axios.create({
  baseURL: SERVICE_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

// 设置身份验证令牌
export const setAuthToken = (token: string) => {
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default Axios;
