import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

interface XAxiosInstance extends AxiosInstance {
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R>;
}
const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_BOOKS_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  }
);

export { axiosClient };
