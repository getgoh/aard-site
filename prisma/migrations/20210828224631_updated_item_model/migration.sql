/*
  Warnings:

  - You are about to drop the column `type` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `wearloc` on the `Item` table. All the data in the column will be lost.
  - Added the required column `itemTypeId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `submittedby` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wearLocId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "type",
DROP COLUMN "wearloc",
ADD COLUMN     "itemTypeId" INTEGER NOT NULL,
ADD COLUMN     "submittedby" TEXT NOT NULL,
ADD COLUMN     "wearLocId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("itemTypeId") REFERENCES "ItemType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("wearLocId") REFERENCES "WearLoc"("id") ON DELETE CASCADE ON UPDATE CASCADE;
