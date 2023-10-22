import { AxiosError } from "axios";

// Action Types
export enum AuthType {
  USER_LOGIN_PENDING = "USER_LOGIN_PENDING",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
}

// IState Login
export interface IAuthState {
  isLoading: boolean;
  userData?: IUserLoginResponse;
  error?: AxiosError;
}

// IAction Login
interface IUserLoginPending {
  type: AuthType.USER_LOGIN_PENDING;
  payload?: any;
}
interface IUserLoginSuccess {
  type: AuthType.USER_LOGIN_SUCCESS;
  payload: {
    userData: IUserLoginResponse;
  };
}
interface IUserLoginError {
  type: AuthType.USER_LOGIN_ERROR;
  payload: {
    error: AxiosError;
  };
}

// IBody Login
export interface IUserLoginBodyData {
  email: string;
  password: string;
}

// IResponse Login
export interface IUserLoginResponse {
  code: number;
  message: string;
  data?: Object;
}

type IUserLogin = IUserLoginPending | IUserLoginSuccess | IUserLoginError;

export type IAuth = IUserLogin;
