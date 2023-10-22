/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from "axios";
import { getAuthToken } from "utils/token";

const token = getAuthToken();

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

if (token) {
  Object.assign(headers, { Authorization: `Bearer ${token}` });
}

const instances = axios.create({
  timeout: 1000000,
  headers,
});

function onFulFilledRequest(conf: AxiosRequestConfig) {
  return conf;
}

function onRejectedRequest(err: any): Promise<any> {
  return Promise.reject(err);
}

function onFulFilledResponse(res: any): Promise<any> {
  return Promise.resolve(res);
}

function onRejectedResponse(err: any) {
  const response = err.response;

  if (response?.status === 401 && response?.config?.headers?.Authorization) {
    localStorage.clear();
    window.location.replace("/login");

    return Promise.reject(err);
  }

  return Promise.reject(err);
}

instances.interceptors.request.use(onFulFilledRequest, onRejectedRequest);
instances.interceptors.response.use(onFulFilledResponse, onRejectedResponse);

export default instances;
