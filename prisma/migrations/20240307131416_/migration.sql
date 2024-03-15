/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pokemonId]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pokemonId` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_number_key" ON "Pokemon"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_number_key" ON "Type"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Type_pokemonId_key" ON "Type"("pokemonId");

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
