/*
  Warnings:

  - You are about to drop the column `wearable` on the `Item` table. All the data in the column will be lost.
  - Added the required column `flags` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromclanname` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemscore` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keywords` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wearloc` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "wearable",
ADD COLUMN     "flags" TEXT NOT NULL,
ADD COLUMN     "fromclanname" TEXT NOT NULL,
ADD COLUMN     "itemscore" INTEGER NOT NULL,
ADD COLUMN     "keywords" TEXT NOT NULL,
ADD COLUMN     "type" INTEGER NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL,
ADD COLUMN     "wearloc" INTEGER NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ItemType" (
    "id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WearLoc" (
    "id" INTEGER NOT NULL,
    "Location" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
