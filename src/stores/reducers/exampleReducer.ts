/* eslint-disable import/no-anonymous-default-export */

import {
  ExampleAction,
  IExampleState,
  ExampleType,
} from "stores/types/exampleType";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export default (
  state: IExampleState = initialState,
  { type, payload }: ExampleAction
) => {
  switch (type) {
    case ExampleType.EXAMPLE_PENDING:
      return { ...state, ...payload, error: null, isLoading: true };
    case ExampleType.EXAMPLE_SUCCESS:
      return { ...state, ...payload, isLoading: false };
    case ExampleType.EXAMPLE_ERROR:
      return { ...state, ...payload, isLoading: false };

    default:
      return state;
  }
};
