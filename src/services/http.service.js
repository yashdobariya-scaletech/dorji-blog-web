import axios from "axios";
import queryString from "query-string";
const axiosInstance = axios.create();

export const API_CONFIG = {
  baseUrl: "http://127.0.0.1:1337",
  path: {
    categories: "categories",
  },
};

const getUrl = (url, params = {}) => {
  let urlString = `${API_CONFIG.baseUrl}/api/${url}`;
  if (params && Object.keys(params).length) {
    urlString += `?${queryString.stringify(params)}`;
  }
  return urlString;
};

/**
 * get method
 * @param request object containing axios params
 */
const get = (url, params = {}) => {
  return commonAxios({ method: "GET", url: getUrl(url, params) });
};

/**
 * post method
 * @param request object containing axios params
 */
const post = (url, params = {}, queryParams = {}) => {
  return commonAxios({
    method: "POST",
    url: getUrl(url, queryParams),
    data: params,
  });
};

/**
 * put method
 * @param request object containing axios params
 */
const put = (url, params = {}) => {
  return commonAxios({ method: "PUT", url: getUrl(url), data: params });
};

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url, params = {}) => {
  return commonAxios({ method: "DELETE", url: getUrl(url), data: params });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type
 */
const commonAxios = ({
  method,
  url,
  data,
  contentType = "application/json",
}) => {
  const headers = {
    "Content-Type": contentType,
    Authorization: `Bearer f921ef43f02cbf9e44863b2c09bd5a6e6c5e2b36a359df06d1f75909d47b45641876936fe162a0890b5555582550be0c40694d4b97b04cd22ce0f72f0ae042f5ffacdfc5cec9bbf978b18b92c74678007de6780b95068a4ac2469bae1fc95415864b37db49ea2a2f4fcfbf9dcc4925162d886161ecb048e5954da40b8af048a3`,
  };

  return new Promise((resolve, reject) => {
    axiosInstance({
      method: method,
      url: url,
      headers: headers,
      data: JSON.stringify(data),
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data && error.response.data.message) {
            reject(new Error(error.response.data.message));
          } else {
            reject(error);
          }
        } else {
          reject(error);
        }
      });
  });
};

export const HttpService = {
  get: get,
  post: post,
  put: put,
  deleteRequest: deleteRequest,
};

module.exports = {
  axiosInstance,
  API_CONFIG,
  HttpService,
};
