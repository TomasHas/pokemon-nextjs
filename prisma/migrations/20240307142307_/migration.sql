/*
  Warnings:

  - You are about to drop the column `pokemonId` on the `Type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[typeId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeId` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_pokemonId_fkey";

-- DropIndex
DROP INDEX "Type_pokemonId_key";

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "pokemonId";

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_typeId_key" ON "Pokemon"("typeId");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
