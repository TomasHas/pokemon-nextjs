import prisma from "./prisma";

const ITEMS_PER_PAGE = 4;
export async function getFilteredPokemons(query, currentPage) {
  const result = await prisma.pokemon.findMany({
    where: { name: { contains: query } },
  });

  // const result = await prisma.pokemon.findMany({ where: { name: query } });
  // console.log("result", result);
  // if (currentPage === 1) {
  //   return result.slice(0, ITEMS_PER_PAGE);
  // } else {
  //   return result.slice(
  //     currentPage - 1 * ITEMS_PER_PAGE,
  //     currentPage * ITEMS_PER_PAGE
  //   );
  // }
  return result;
}

export async function getTypes() {
  try {
    const result = await prisma.type.findMany();
    const allTypes = result.map((type) => type.name);
    // console.log(allTypes);
    return allTypes;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPokemonPages(query) {
  try {
    // const count = await
    const count = await prisma.pokemon.count({
      where: { name: { contains: query } },
    });
    console.log(count);
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    console.log("totalPages", totalPages);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of pokemons.");
  }
}

export async function getPokemonById(id) {
  try {
    const pokemon = await prisma.pokemon.findUnique({
      where: { id: parseInt(id) },
    });
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    console.log(error);
  }
}
