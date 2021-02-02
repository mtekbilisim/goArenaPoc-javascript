export interface IGlobalServerResponse<T> {
  data: T;
}

export interface IGlobalServerErrorResponse {
  isSuccess: boolean;
  message: string;
}

export interface ICreateAPIModel {
  url: string | undefined;
  version?: string;
}

export enum ErrorCodes {
  Unauthorized = 3,
  InvalidCredentials = 100,
  ReadingDenied = 300,
}
