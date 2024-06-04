-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "life" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypesOnPokemon" (
    "typeNumber" INTEGER NOT NULL,
    "pokemonNumber" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_number_key" ON "Pokemon"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_number_key" ON "Type"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TypesOnPokemon_pokemonNumber_typeNumber_key" ON "TypesOnPokemon"("pokemonNumber", "typeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TypesOnPokemon" ADD CONSTRAINT "TypesOnPokemon_typeNumber_fkey" FOREIGN KEY ("typeNumber") REFERENCES "Type"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypesOnPokemon" ADD CONSTRAINT "TypesOnPokemon_pokemonNumber_fkey" FOREIGN KEY ("pokemonNumber") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
