/*
  Warnings:

  - You are about to drop the `_PokemonToType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToType" DROP CONSTRAINT "_PokemonToType_B_fkey";

-- DropTable
DROP TABLE "_PokemonToType";

-- CreateTable
CREATE TABLE "__PokemonToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__PokemonToType_AB_unique" ON "__PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "__PokemonToType_B_index" ON "__PokemonToType"("B");

-- AddForeignKey
ALTER TABLE "__PokemonToType" ADD CONSTRAINT "__PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__PokemonToType" ADD CONSTRAINT "__PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
