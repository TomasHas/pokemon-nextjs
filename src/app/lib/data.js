import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 4;

export const getData = async (query, currentPage) => {
  const offset = 0;
  const limit = 20;
  console.log("offset", offset, "limit", limit);
  noStore();
  try {
    const pokemonApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    console.log(pokemonApi.data.results[0]);
    let data = pokemonApi.data.results
      .filter((p) => p.name.includes(query))
      .map(async (p) => {
        const pokeInfo = await axios.get(p.url);

        return pokeInfo.data;
      });
    // console.log("data", data);
    // data = data.filter((p) => p.name.includes(query));

    const formattedData = await Promise.all(data);
    const result = formattedData.map((p) => {
      return {
        id: p.id,
        name: p.name,
        life: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
        types: p.types.map((pokeType) => pokeType.type.name),
        image: p.sprites.other.dream_world.front_default,
      };
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export const getDataPages = async () => {};

// export const getData = async () => {
//   try {
//     // Fetch data from the main Pokemon API endpoint
//     const pokemonApiResponse = await fetch(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
//     );
//     const pokemonApiData = await pokemonApiResponse.json();

//     // Map through the results and fetch additional data for each Pokemon
//     const data = await Promise.all(
//       pokemonApiData.results.map(async (p) => {
//         const pokeInfoResponse = await fetch(p.url);
//         const pokeInfo = await pokeInfoResponse.json();
//         return pokeInfo;
//       })
//     );

//     // Process the fetched data and format it
//     const formattedData = data.map((p) => ({
//       id: p.id,
//       name: p.name,
//       life: p.stats[0].base_stat,
//       attack: p.stats[1].base_stat,
//       defense: p.stats[2].base_stat,
//       speed: p.stats[5].base_stat,
//       height: p.height,
//       weight: p.weight,
//       types: p.types.map((pokeType) => pokeType.type.name),
//       image: p.sprites.other.dream_world.front_default,
//     }));

//     return formattedData;
//   } catch (error) {
//     console.error("Error fetching Pokemon data:", error);
//     throw error;
//   }
// };
