/*
  Warnings:

  - You are about to drop the column `typeId` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `pokemonId` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_typeId_fkey";

-- DropIndex
DROP INDEX "Pokemon_typeId_key";

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "typeId";

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "pokemonId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
