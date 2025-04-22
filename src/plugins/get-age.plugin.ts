const { getAgePlugin } = require("get-age");

export const getAge = (birdhdate: string) => {
  return getAgePlugin(birdhdate);
};
