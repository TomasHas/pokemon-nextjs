/*
  Warnings:

  - A unique constraint covering the columns `[pokemonId,typeId]` on the table `TypePokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TypePokemon_pokemonId_typeId_key" ON "TypePokemon"("pokemonId", "typeId");
