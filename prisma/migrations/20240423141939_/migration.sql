/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "number" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TypesOnPokemon" (
    "typeNumber" INTEGER NOT NULL,
    "pokemonNumber" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TypesOnPokemon_pokemonNumber_typeNumber_key" ON "TypesOnPokemon"("pokemonNumber", "typeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_number_key" ON "Pokemon"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_number_key" ON "Type"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- AddForeignKey
ALTER TABLE "TypesOnPokemon" ADD CONSTRAINT "TypesOnPokemon_typeNumber_fkey" FOREIGN KEY ("typeNumber") REFERENCES "Type"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypesOnPokemon" ADD CONSTRAINT "TypesOnPokemon_pokemonNumber_fkey" FOREIGN KEY ("pokemonNumber") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
