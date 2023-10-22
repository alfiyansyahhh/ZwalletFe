import { AxiosError } from "axios";

// Action Types
export enum ExampleType {
  EXAMPLE_PENDING = "EXAMPLE_PENDING",
  EXAMPLE_SUCCESS = "EXAMPLE_SUCCESS",
  EXAMPLE_ERROR = "EXAMPLE_ERROR",
}

// IState Example
export interface IExampleState {
  data: null;
  isLoading: boolean;
  error: AxiosError;
}

// IAction Example
interface GetExampleAction {
  type: ExampleType.EXAMPLE_SUCCESS;
  payload: {
    data: IExampleResponse;
  };
}

interface SetLoadingAction {
  type: ExampleType.EXAMPLE_PENDING;
  payload?: any;
}

interface SetErrorAction {
  type: ExampleType.EXAMPLE_ERROR;
  payload: {
    error: AxiosError;
  };
}

// IParams Example
export interface ExampleData {
  id: number;
}

// IResponse Example
export interface IExampleResponse {
  code: number;
  message: string;
  data?: Object;
}

export type ExampleAction =
  | GetExampleAction
  | SetLoadingAction
  | SetErrorAction;
