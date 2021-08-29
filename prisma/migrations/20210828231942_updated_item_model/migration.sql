/*
  Warnings:

  - You are about to drop the column `itemTypeId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `wearLocId` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "itemTypeId",
DROP COLUMN "wearLocId";
