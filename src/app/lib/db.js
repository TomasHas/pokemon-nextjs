import prisma from "./prisma";

const ITEMS_PER_PAGE = 4;

export async function getFilteredPokemons(
  query,
  currentPage,
  sortName,
  sortValue
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE; // Calculate offset
  console.log("db sortName", sortName);
  console.log("db sortvalue", sortValue);

  const orderBy = sortName && sortValue ? { [sortName]: sortValue } : {};
  const result = await prisma.pokemon.findMany({
    where: { name: { contains: query } },
    orderBy,
    // orderBy: { [sortName]: sortValue },
    // orderBy: { weight: weight }, // Sorting by name in ascending order
    skip: offset, // Skip records for pagination
    take: ITEMS_PER_PAGE, // Take only a certain number of records
  });

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
    const count = await prisma.pokemon.count({
      where: { name: { contains: query } },
    });
    // console.log(count);
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    // console.log("totalPages", totalPages);
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

export async function createPokemon({ pokeSpecs }) {
  try {
    const newPokemon = await prisma.pokemon.create({
      data: {
        number: pokeSpecs.number,
        name: pokeSpecs.name,
        life: pokeSpecs.life,
        attack: pokeSpecs.attack,
        defense: pokeSpecs.defense,
        speed: pokeSpecs.speed,
        height: pokeSpecs.height,
        weight: pokeSpecs.weight,
        types: { connect: pokeSpecs.types.map((typeId) => ({ id: typeId })) },
        image: pokeSpecs.image,
      },
      include: {
        types: true,
      },
    });
  } catch (error) {}
}
