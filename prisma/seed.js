const { PrismaClient } = require("@prisma/client");
const { getPokemons, getTypes } = require("../src/app/lib/data");
const prisma = new PrismaClient();

const main = async () => {
  const apiPokemon = await getPokemons();
  const apiTypes = await getTypes();

  // Create or find existing types
  try {
    const createdTypes = await prisma.type.createMany({
      data: apiTypes.map((t) => ({ name: t.name, number: t.number })),
      skipDuplicates: true,
    });

    console.log("Created types:", createdTypes);
  } catch (error) {
    console.error("Error creating types:", error);
  }
  const allTypes = await prisma.type.findMany();
  // console.log(allTypes);

  try {
    for (let p = 0; p < apiPokemon.length; p++) {
      const filteredTypes = await apiTypes.filter((t) =>
        apiPokemon[p].types.includes(t.name)
      );
      const types = await filteredTypes.map((t) => {
        return { typeId: t.number };
      });

      const pokemon = await prisma.pokemon.create({
        data: {
          number: apiPokemon[p].number,
          name: apiPokemon[p].name,
          life: apiPokemon[p].life,
          attack: apiPokemon[p].attack,
          defense: apiPokemon[p].defense,
          speed: apiPokemon[p].speed,
          height: apiPokemon[p].height,
          weight: apiPokemon[p].weight,

          image: apiPokemon[p].image,
          // types: {
          //   connect: [
          //     {
          //       type: {
          //         connect: {
          //           id: 101,
          //         },
          //       },
          //     },
          //     {
          //       type: {
          //         connect: {
          //           id: 102,
          //         },
          //       },
          //     },
          //   ],
          // },
        },
      });

      console.log("Created or updated Pokemon:", pokemon);
    }

    // console.log(allPokemon);

    console.log("Created or updated Pokemon:", pokemon);
    await prisma.$disconnect();
  } catch (error) {}
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
// const pokemon = await prisma.pokemon.createMany({
//   data: apiPokemon.map((p) => ({
//     name: p.name,
//     number: p.number,
//     life: p.life,
//     attack: p.attack,
//     defense: p.defense,
//     speed: p.speed,
//     height: p.height,
//     weight: p.weight,
//     image: p.image,
//     // types: {
//     //   create: [
//     //     {
//     //       type: {
//     //         connect: {
//     //           id: 23,
//     //         },
//     //       },
//     //     },
//     //     {
//     //       type: {
//     //         connect: {
//     //           id: 22,
//     //         },
//     //       },
//     //     },
//     //   ],
//     // },
//   })),
//   skipDuplicates: true,
// });
