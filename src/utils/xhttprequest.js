/**
 * Axios wrapper
 * Create my own axios wrapper handler to the method
 * add parameters header
 * Define 4 method public : GET, POST, PUT, DELETE with bearer token header retrieved from the context
 */

import axios from "axios";
// import useStore from '../store';

// We store the method "axios.create()" in the variable "axiosClient"
const axiosClient = axios.create();

// We define a baseURL for Requests
axiosClient.defaults.baseURL = "http://localhost:8000/";

// We define default headers for the requests
axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application.json",
};

// We define access control with credential (authentification)
axiosClient.defaults.withCredentials = true;

const XhttpRequest = (_props) => {
  // getQueryString Request
  const getQueryString = async (url, data) => {
    let queryString = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&");
    return queryString;
  };

  // get Request
  const getRoute = async (url, data) => {
    try {
      const response = await axiosClient.get(url, {
        params: data,
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // post Request
  const postRoute = async (url, data, _cfg) => {
    try {
      const response = await axiosClient.post(url, data, {
        method: "POST",
        mode: "cors",
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // put Request
  const putRoute = async (url, data, _cfg) => {
    try {
      const response = await axiosClient.put(url, data, {
        method: "PUT",
        mode: "cors",
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // delete Request
  const deleteRoute = async (url, data, _cfg) => {
    try {
      const response = await axiosClient.delete(url, {
        method: "DELETE",
        mode: "cors",
        headers: getHeaders(),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // getHeaders method
  const getHeaders = () => {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application.json",
      "X-Requested-With": "XMLHttpRequest",
      ...getToken(),
    };
    return headers;
  };

  // getToken method
  const getToken = () => {
    let header = "";
    // const store = useStore.getState();
    // const token = useStore.getToken();
    const token = localStorage.getItem("token");
    if (token) {
      header = {
        Authorization: `bearer ${token} `,
      };
    }
    return header;
  };

  // all statements in the return will be available in app (public)
  return {
    get: getRoute,
    newGet: getQueryString,
    post: postRoute,
    delete: deleteRoute,
    put: putRoute,
  };
};

export default XhttpRequest();
