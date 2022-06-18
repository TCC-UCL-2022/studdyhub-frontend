import { environments } from "@/config";
import { ACCESS_TOKEN_KEY } from "@/constants";
import axios, { AxiosInstance } from "axios";

const createHttpCLient = (): AxiosInstance => {
  const baseUrl = environments.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  axiosInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    request.headers!.Authorization = `Bearer ${token}`;
    return request;
  });

  return axiosInstance;
};

export const httpClient = createHttpCLient();

export const isHttpClientError = axios.isAxiosError;
