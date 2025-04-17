const axios = require("axios");

const httpClientPlugin = {
  // get: async (url) => {
  //   const response = await fetch(url);
  //   return await response.json();

  // axios

  get: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
  // post: async (url, body) => {},
  // put: async (url, body) => {},
  // delete: async (url) => {},
};

module.exports = {
  httpClientPlugin,
};
