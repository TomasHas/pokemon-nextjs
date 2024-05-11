const axios = require("axios");

//&  API SEED //////////////////////////////////////////////////////////////////
const getPokemons = async () => {
  const offset = 0;
  const limit = 200;
  // console.log("offset", offset, "limit", limit);
  // noStore();
  try {
    const pokemonApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );

    let data = pokemonApi.data.results.map(async (p) => {
      const pokeInfo = await axios.get(p.url);

      return pokeInfo.data;
    });

    const formattedData = await Promise.all(data);
    const result = formattedData.map((p) => {
      return {
        number: p.id,
        name: p.name,
        life: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
        types: p.types?.map((pokeType) => pokeType.type.name),
        image: p.sprites.other.dream_world.front_default,
      };
    });
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

const getTypes = async () => {
  try {
    const typesApi = await axios.get(`https://pokeapi.co/api/v2/type`);

    let data = typesApi.data.results.map(async (t) => {
      const typeInfo = await axios.get(t.url);

      return typeInfo.data;
    });

    const formattedData = await Promise.all(data);
    const result = formattedData.map((t) => {
      return { number: t.id, name: t.name };
    });

    // console.log("types", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPokemons, getTypes };
