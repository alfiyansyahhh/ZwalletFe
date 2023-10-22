import { AxiosError } from "axios";

export enum ErrorType {
  ERROR_SUCCESS = "ERROR_SUCCESS",
}

interface IErrorGlobal {
  type: ErrorType.ERROR_SUCCESS;
  payload: {
    error: AxiosError;
  };
}

export type IError = IErrorGlobal;
