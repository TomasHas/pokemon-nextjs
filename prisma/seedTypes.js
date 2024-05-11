const { PrismaClient } = require("@prisma/client");
const { getTypes } = require("../src/app/lib/data");
const prisma = new PrismaClient();

const main = async () => {
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
