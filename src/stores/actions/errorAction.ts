import { AxiosError } from "axios";
import { ErrorType } from "stores/types/errorTypes";

export const errorGlobal = (error: AxiosError) => ({
  type: ErrorType.ERROR_SUCCESS,
  payload: {
    error
  }
});
