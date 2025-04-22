// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const response = await fetch(url);
//   const pokemon = await response.json();

//   return pokemon.name;
// };

// module.exports = getPokemonById;

// const { httpClientPlugin } = require("../plugins/http-client-plugin");
import { httpClientPlugin } from "../plugins/http-client-plugin";

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientPlugin.get(url);

  return pokemon.name;
};
