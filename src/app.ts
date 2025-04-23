// const { emailTemplate } = require("./js-foundation/01-template.js");
// require("./js-foundation/02-destructuring.js");
// const { getUserById } = require("./js-foundation/04-arrow.js");
// const { getUserById } = require("./js-foundation/04-arrow");
// const { getAge } = require("./plugins/get-age.plugin.js");
// const { getIdPlugin } = require("./plugins/get-id-plugin.js");
// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getIdPlugin, getAge });

// const obj = {
//   name: "Argiro",
//   birthten: "1982-01-01",
// };

// const argiro = makePerson(obj);

// console.log(argiro);

// console.log(emailTemplate);

// const id = 1;

// getUserById(id, (er, user) => {
//   if (er) {
//     throw new Error(er);
//   } else {
//     console.log(user);
//   }
// });

//promises

// const getPokemonById = require("./js-foundation/06-promises");

// getPokemonById(20)
//   .then((name) => console.log(name))
//   .catch((er) => console.log({ er }))
//   .finally(() => console.log("finally"));

//async await

// const getPokemonById = require("./js-foundation/07-async");

// getPokemonById(20)
//   .then((name) => console.log(name))
//   .catch((er) => console.log({ er }))
//   .finally(() => console.log("finally"));

// const buildLogger = require("./plugins/logger-plugin.js");
// import { getPokemonById } from "./js-foundation/07-async";
// import { buildLogger } from "./plugins/logger-plugin";

// const logger = buildLogger("app.js");

// logger.log("hola log de app.js");

// logger.error("hola error de app.js");

// getPokemonById(1).then((name) => console.log(name));
