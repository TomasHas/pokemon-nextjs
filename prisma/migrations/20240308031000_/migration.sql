/*
  Warnings:

  - You are about to drop the `PokemonTypes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[number]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PokemonTypes" DROP CONSTRAINT "PokemonTypes_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonTypes" DROP CONSTRAINT "PokemonTypes_typeId_fkey";

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PokemonTypes";

-- CreateTable
CREATE TABLE "PokemonType" (
    "pokemonId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "PokemonType_pkey" PRIMARY KEY ("pokemonId","typeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_number_key" ON "Pokemon"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_number_key" ON "Type"("number");

-- AddForeignKey
ALTER TABLE "PokemonType" ADD CONSTRAINT "PokemonType_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonType" ADD CONSTRAINT "PokemonType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
