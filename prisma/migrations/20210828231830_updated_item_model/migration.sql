/*
  Warnings:

  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wearloc` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_itemTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_wearLocId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "type" INTEGER NOT NULL,
ADD COLUMN     "wearloc" INTEGER NOT NULL;
