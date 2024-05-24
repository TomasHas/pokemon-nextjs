"use server";
import prisma from "./prisma";

const ITEMS_PER_PAGE = 4;

// export async function getFilteredPokemons(
//   query,
//   currentPage,
//   sortName,
//   sortValue,
//   filterType
// ) {
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE; // Calculate offset
//   // console.log("db sortName", sortName);
//   // console.log("db sortvalue", sortValue);

//   const orderBy = sortName && sortValue ? { [sortName]: sortValue } : {};
//   const filterByType = filterType ? { ["type"]: filterType } : {};
//   // console.log(orderBy);
//   console.log(filterByType);
//   try {
//     const result = await prisma.pokemon.findMany({
//       where: {
//         name: { contains: query },
//       },
//       include: {
//         type: {
//           include: {
//             type: {
//               select: {
//                 name: true,
//               },
//             },
//           },
//         },
//       },
//       // filterByType,
//       orderBy,
//       // orderBy: { [sortName]: sortValue },
//       // orderBy: { weight: weight }, // Sorting by name in ascending order
//       skip: offset, // Skip records for pagination
//       take: ITEMS_PER_PAGE, // Take only a certain number of records
//     });

//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getFilteredPokemons(
  query,
  currentPage,
  sortName,
  sortValue,
  filterType
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE; // Calculate offset
  // console.log("db sortName", sortName);
  // console.log("db sortvalue", sortValue);

  const orderBy = sortName && sortValue ? { [sortName]: sortValue } : {};
  const filterByType = filterType ? { ["type"]: filterType } : {};
  // console.log(orderBy);
  console.log(filterType);
  try {
    const result = await prisma.pokemon.findMany({
      where: {
        AND: [
          {
            type: {
              some: {
                type: {
                  name: {
                    contains: filterType,
                  },
                },
              },
            },
          },
          {
            name: {
              contains: query,
            },
          },
        ],
      },
      include: {
        type: {
          include: {
            type: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      // filterByType,
      orderBy,
      // orderBy: { [sortName]: sortValue },
      // orderBy: { weight: weight }, // Sorting by name in ascending order
      skip: offset, // Skip records for pagination
      take: ITEMS_PER_PAGE, // Take only a certain number of records
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getTypes() {
  try {
    const result = await prisma.type.findMany();
    const allTypes = result.map((type) => type.name);
    // console.log("allTypes", allTypes);
    return allTypes;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonCount() {
  try {
    const count = await prisma.pokemon.count();
    // console.log("pokemonCount", count);
    return count;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
export async function getTypesCount() {
  try {
    const count = await prisma.type.count();
    console.log("", count);
    return count;
  } catch (error) {
    console.error("Database Error:", error);
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
