import Axios, {AxiosRequestConfig} from 'axios';

interface RequestObject {
  params?: Object;
  headers?: Object;
  data?: Object;
}

enum methods {
  GET = 'GET',
  POST = 'POST',
}

type Method = 'GET' | 'POST';

const request = (method: Method, url: string, requestObject: RequestObject) => {
  const {params, headers, data}: RequestObject = requestObject;
  const defaultHeaders: object = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const defaultParams: object = {
    ...params,
  };

  const axiosObject: AxiosRequestConfig = {
    url,
    method,
    params: {
      ...defaultParams,
    },
    headers: {
      ...defaultHeaders,
    },
    data,
  };

  return Axios(axiosObject);
};

const get = (url: string, requestObject: RequestObject = {}) => {
  const {params, headers} = requestObject;
  return request(methods.GET, url, {params, headers});
};

const post = (url: string, {params, headers, data}: RequestObject) => {
  return request(methods.POST, url, {params, headers, data});
};

export {get, post};
