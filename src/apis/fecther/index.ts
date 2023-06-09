import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import {
  AUTH_REQUIRED_REGEX_LIST,
  BASE_URL,
  DEFAULT_TIME_OUT,
  WHITE_LIST,
} from "@/constants/api.constants";
import authManager from "@/utils/authManager/authManager";

type fecther = AxiosInstance;

const fetcher: fecther = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIME_OUT,
});

fetcher.interceptors.request.use((config) => {
  const token = authManager.getToken();
  const isAuthNeed = AUTH_REQUIRED_REGEX_LIST.some((pattern) =>
    config.url?.match(pattern),
  );

  if (!isAuthNeed) return config;
  if (WHITE_LIST.some((pattern) => config.url?.match(pattern))) return config;

  // 여기부터는 auth가 필요하다.
  if (!token) throw new Error("UN Authorization");

  const newConfing = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  } as InternalAxiosRequestConfig<any>;

  return newConfing;
});

export default fetcher;
