/*
  Warnings:

  - You are about to drop the column `pokemonId` on the `Type` table. All the data in the column will be lost.
  - Added the required column `pokemonNumber` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_pokemonId_fkey";

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "pokemonId",
ADD COLUMN     "pokemonNumber" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_pokemonNumber_fkey" FOREIGN KEY ("pokemonNumber") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
