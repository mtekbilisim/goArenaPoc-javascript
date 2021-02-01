import Axios, { AxiosRequestConfig } from "axios";
import { sleep } from "utils";
import { GlobalResponseHandler, GlobalErrorHandler } from "./helpers";
import { ICreateAPIModel } from "./models";

let AuthCatcher = async (req: AxiosRequestConfig | Promise<AxiosRequestConfig>) => {
  console.warn("Global Auth Catcher not set yet.");
  await sleep(100);
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

export function CreateAPI(config: ICreateAPIModel, ResponseHandler = GlobalResponseHandler, ErrorHandler = GlobalErrorHandler) {
  const { url, version } = config;

  const GlobalAuthCatcher = async (request: AxiosRequestConfig | Promise<AxiosRequestConfig>): Promise<AxiosRequestConfig> => {
    await AuthCatcher(request);
    return request;
  };

  let INSTANCE_BASE_URL = url;

  if (version) {
    INSTANCE_BASE_URL += version + "/";
  }

  const API = Axios.create({
    baseURL: INSTANCE_BASE_URL,
  });

  API.interceptors.request.use((req): AxiosRequestConfig | Promise<AxiosRequestConfig> => GlobalAuthCatcher(req));
  API.interceptors.response.use(ResponseHandler, ErrorHandler);

  return API;
}

export const SetAuthCatcher = async (fn: any): Promise<{}> => {
  return new Promise(async (resolve, reject) => {
    AuthCatcher = fn;
    console.info("Auth catcher setted..");
    resolve(true);
  });
};

// export const PushInterceptor;

export const API = CreateAPI({ url: process.env.REACT_APP_API_BASE_URL });
