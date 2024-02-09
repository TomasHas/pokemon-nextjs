import axios from "axios";

export const getData = async () => {
  try {
    const pokemonApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );

    const data = pokemonApi.data.results.map(async (p) => {
      const pokeInfo = await axios.get(p.url);
      // console.log(pokeInfo.data);
      return pokeInfo.data;
    });
    const formattedData = Promise.all(data).then((response) => {
      return response.map((p) => {
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
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

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
