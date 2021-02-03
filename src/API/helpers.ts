import { AxiosResponse, AxiosError } from "axios";
import { IGlobalServerResponse, IGlobalServerErrorResponse } from "./models";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export const GlobalResponseHandler = <T>(response: AxiosResponse<IGlobalServerResponse<T>>) => {
  const { data } = response.data;

  if (data) {
    return data;
  } else {
    return response.data;
  }
};

export const GlobalErrorHandler = async (responseError: AxiosError<IGlobalServerErrorResponse>) => {
  console.error("Global API error handler->", responseError.response);
  let err = null;

  if (responseError.response && responseError.response.data) {
    const { data, config } = responseError.response;

    if (responseError.response.status === 401) {
      err = "Oturum süreniz dolmuş, lütfen tekrar giriş yapınız.";
      localStorage.clear();
    } else {
      err = `Üzgünüz, ${config.url} methodunda hata oluştu.`;
    }

    // if (data.status === ErrorCodes.Unauthorized) {
    //   err = "Oturum süreniz dolmuş, lütfen tekrar giriş yapınız.";
    //   localStorage.clear();
    //   window.location.reload();
    // }

    if (data.message) {
      err = data.message;
    }

    if (process.env.NODE_ENV === "development") {
      console.log("Working on Development mod");
    }

    console.error(err);
    throw err;
  }

  err = "Sunucuya erişilemedi, VPN bağlantınız kopmuş olabilir.";

  console.error(err);
  throw err;
};
