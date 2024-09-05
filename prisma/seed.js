const { PrismaClient } = require("@prisma/client");
const { getPokemons, getTypes } = require("../src/app/lib/data");
const prisma = new PrismaClient();

const main = async () => {
  const apiPokemon = await getPokemons();
  const apiTypes = await getTypes();
  // console.log(apiPokemon);
  try {
    for (let p = 0; p < apiPokemon.length; p++) {
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
          type: {
            create: apiPokemon[p].types.map((t) => {
              return {
                type: {
                  connect: {
                    name: t,
                  },
                },
              };
            }),
          },
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

//&node prisma/seed.js
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
