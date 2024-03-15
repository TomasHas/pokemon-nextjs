/*
  Warnings:

  - You are about to drop the column `pokemonNumber` on the `Type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_pokemonNumber_fkey";

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "pokemonNumber",
ADD COLUMN     "number" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Type_number_key" ON "Type"("number");

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
