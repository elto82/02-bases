// const axios = require("axios");
import axios from "axios";

export const httpClientPlugin = {
  // get: async (url) => {
  //   const response = await fetch(url);
  //   return await response.json();

  // axios

  get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },
  // post: async (url, body) => {},
  post: async (url: string, body: any) => {},
  // put: async (url, body) => {},
  put: async (url: string, body: any) => {},
  // delete: async (url) => {},
  delete: async (url: string) => {},
};
