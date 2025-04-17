const { v4: uuidv4 } = require("uuid");

const getIdPlugin = () => uuidv4();

module.exports = { getIdPlugin };
