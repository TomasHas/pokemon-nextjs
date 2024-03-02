const { PrismaClient } = require("@prisma/client");
const { getPokemons, getTypes } = require("../src/app/lib/data");
const prisma = new PrismaClient();

const main = async () => {
  const apiPokemon = await getPokemons();
  const apiTypes = await getTypes();

  const pokemon = await prisma.pokemon.createMany({
    data: apiPokemon,
  });
  console.log(pokemon);
  const types = await prisma.type.createMany({ data: apiTypes });
  console.log(types);
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
