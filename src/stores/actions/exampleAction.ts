import { AxiosError } from "axios";
import provider, { IProvider } from "provider";
import MethodProvider from "provider/methods";
import { ThunkAction } from "redux-thunk";
import { RootState } from "stores";
import { IError } from "stores/types/errorTypes";
import {
  ExampleAction,
  ExampleData,
  ExampleType,
  IExampleResponse,
} from "stores/types/exampleType";
import { errorGlobal } from "./errorAction";

export const examplePending = (): ExampleAction => ({
  type: ExampleType.EXAMPLE_PENDING,
});

export const exampleSuccess = (data: IExampleResponse): ExampleAction => ({
  type: ExampleType.EXAMPLE_SUCCESS,
  payload: {
    data,
  },
});

export const exampleError = (error: AxiosError): ExampleAction => ({
  type: ExampleType.EXAMPLE_ERROR,
  payload: {
    error,
  },
});

export const exampleAction = (
  params: ExampleData,
  callback?: (data: IExampleResponse) => void
): ThunkAction<void, RootState, null, ExampleAction | IError> => {
  return async (dispatch) => {
    try {
      const objProvider: IProvider = {
        method: MethodProvider.GET,
        path: `users/${params?.id}`,
      };
      const response = await provider(objProvider);

      dispatch(exampleSuccess(response?.data?.data));
      callback(response?.data?.data);
    } catch (e) {
      dispatch(errorGlobal(e));
      dispatch(exampleError(e));
    }
  };
};
