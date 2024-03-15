/*
  Warnings:

  - You are about to drop the column `pokemonId` on the `TypePokemon` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `TypePokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pokemonNumber,typeNumber]` on the table `TypePokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemonNumber` to the `TypePokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeNumber` to the `TypePokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TypePokemon" DROP CONSTRAINT "TypePokemon_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "TypePokemon" DROP CONSTRAINT "TypePokemon_typeId_fkey";

-- DropIndex
DROP INDEX "TypePokemon_pokemonId_typeId_key";

-- AlterTable
ALTER TABLE "TypePokemon" DROP COLUMN "pokemonId",
DROP COLUMN "typeId",
ADD COLUMN     "pokemonNumber" INTEGER NOT NULL,
ADD COLUMN     "typeNumber" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TypePokemon_pokemonNumber_typeNumber_key" ON "TypePokemon"("pokemonNumber", "typeNumber");

-- AddForeignKey
ALTER TABLE "TypePokemon" ADD CONSTRAINT "TypePokemon_pokemonNumber_fkey" FOREIGN KEY ("pokemonNumber") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypePokemon" ADD CONSTRAINT "TypePokemon_typeNumber_fkey" FOREIGN KEY ("typeNumber") REFERENCES "Type"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
