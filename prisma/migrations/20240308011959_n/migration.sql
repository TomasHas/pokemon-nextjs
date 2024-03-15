/*
  Warnings:

  - You are about to drop the column `number` on the `Type` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Type_number_key";

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "number";
