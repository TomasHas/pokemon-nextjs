/*
  Warnings:

  - You are about to drop the `PokemonType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PokemonToType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonType" DROP CONSTRAINT "PokemonType_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonType" DROP CONSTRAINT "PokemonType_typeId_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_B_fkey";

-- DropIndex
DROP INDEX "Pokemon_number_key";

-- DropTable
DROP TABLE "PokemonType";

-- DropTable
DROP TABLE "_PokemonToType";

-- CreateTable
CREATE TABLE "TypePokemon" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "TypePokemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypePokemon_pokemonId_typeId_key" ON "TypePokemon"("pokemonId", "typeId");

-- AddForeignKey
ALTER TABLE "TypePokemon" ADD CONSTRAINT "TypePokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypePokemon" ADD CONSTRAINT "TypePokemon_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
