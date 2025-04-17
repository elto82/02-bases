const getAgePlugin = require("get-age");

const getAge = (birdhdate) => {
  if (!birdhdate) {
    return new Error("birdhdate is required");
  }

  return getAgePlugin(birdhdate);
};

module.exports = { getAge };
