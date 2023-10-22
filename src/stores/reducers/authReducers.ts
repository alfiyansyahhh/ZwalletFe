/* eslint-disable import/no-anonymous-default-export */
import { AuthType, IAuth, IAuthState } from "stores/types/authTypes";

const initialState = {
  isLoading: false,
  userData: null,
};

export default (state: IAuthState = initialState, { type, payload }: IAuth) => {
  switch (type) {
    case AuthType.USER_LOGIN_PENDING:
      return { ...state, ...payload, error: null, isLoading: true };
    case AuthType.USER_LOGIN_SUCCESS:
      return { ...state, ...payload, isLoading: false };
    case AuthType.USER_LOGIN_ERROR:
      return { ...state, ...payload, error: null, isLoading: false };

    default:
      return state;
  }
};
