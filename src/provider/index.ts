/* eslint-disable import/no-anonymous-default-export */
import { AxiosRequestConfig } from "axios";
import config from "constants/config";
import axiosInstance from "./axios.instance";
import MutationTypes from "./methods";

export interface IProvider extends Omit<AxiosRequestConfig, "method"> {
  path: AxiosRequestConfig["url"];
  queryParams?: AxiosRequestConfig["params"];
  method: MutationTypes;
}

export default ({
  method,
  path,
  data,
  queryParams,
  headers,
}: IProvider): any => {
  const instanceConfig: AxiosRequestConfig = {
    baseURL: config.API_URL,
    url: path,
    params: queryParams,
    data,
  };

  if (headers) {
    axiosInstance.defaults.headers = {
      ...axiosInstance.defaults.headers,
      ...headers,
    };
  }

  switch (method) {
    case MutationTypes.GET: {
      instanceConfig.method = MutationTypes.GET;
      data && (instanceConfig.data = JSON.stringify(data));
      break;
    }
    case MutationTypes.POST: {
      instanceConfig.method = MutationTypes.POST;
      break;
    }
    case MutationTypes.DELETE: {
      instanceConfig.method = MutationTypes.DELETE;
      instanceConfig.data = JSON.stringify(data);
      break;
    }
    case MutationTypes.PUT: {
      instanceConfig.method = MutationTypes.PUT;
      instanceConfig.data = JSON.stringify(data);
      break;
    }
    case MutationTypes.PATCH: {
      instanceConfig.method = MutationTypes.PATCH;
      instanceConfig.data = JSON.stringify(data);
      break;
    }
    default:
      throw new Error(`Unsupported Data Provider request method ${method}`);
  }

  return axiosInstance.request(instanceConfig);
};
