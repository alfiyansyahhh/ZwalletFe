import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "stores";
import { exampleAction } from "stores/actions/exampleAction";
import { ExampleData, IExampleResponse } from "stores/types/exampleType";

const useExample = () => {
  const dispatch = useDispatch();
  const exampleState = useSelector((state: RootState) => state.example);

  const handleExample = useCallback(
    (params: ExampleData, callback?: (data: IExampleResponse) => void) => {
      dispatch(exampleAction(params, callback));
    },
    [dispatch]
  );

  return {
    exampleState,
    example: handleExample,
  };
};

export default useExample;
