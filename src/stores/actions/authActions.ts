import MethodProvider from "provider/methods";
import { AxiosError } from "axios";
import {
  AuthType,
  IAuth,
  IUserLoginBodyData,
  IUserLoginResponse,
} from "stores/types/authTypes";
import { ThunkAction } from "redux-thunk";
import { IError } from "stores/types/errorTypes";
import provider, { IProvider } from "provider";
import { errorGlobal } from "./errorAction";
import { RootState } from "stores";
import { setAuthToken } from "utils/token";

export const userLoginPending = (): IAuth => ({
  type: AuthType.USER_LOGIN_PENDING,
});

export const userLoginSuccess = (userData: IUserLoginResponse): IAuth => ({
  type: AuthType.USER_LOGIN_SUCCESS,
  payload: {
    userData,
  },
});

export const userLoginError = (error: AxiosError): IAuth => ({
  type: AuthType.USER_LOGIN_ERROR,
  payload: {
    error,
  },
});

export const userLogin = (
  bodyData: IUserLoginBodyData,
  callback?: (data: IUserLoginResponse) => void
): ThunkAction<void, RootState, null, IAuth | IError> => {
  return async (dispatch) => {
    dispatch(userLoginPending());

    try {
      const objProvider: IProvider = {
        method: MethodProvider.POST,
        path: "login",
        data: bodyData,
      };
      const response = await provider(objProvider);
      const res = {
        code: response?.status,
        message: "Login Success!",
        data: response?.data,
      };

      setAuthToken(response?.data?.token);
      dispatch(userLoginSuccess(response?.data));
      callback?.(res);
    } catch (e) {
      const error = {
        code: e?.response?.status,
        message: e?.response?.data?.error,
        data: e?.response?.data,
      };

      callback?.(error);
      dispatch(errorGlobal(e));
      dispatch(userLoginError(e));
    }
  };
};
