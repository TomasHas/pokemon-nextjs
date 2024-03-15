/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `TypePokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypePokemon" ADD COLUMN     "number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_number_key" ON "Pokemon"("number");
