/*
  Warnings:

  - You are about to drop the column `Location` on the `WearLoc` table. All the data in the column will be lost.
  - Added the required column `location` to the `WearLoc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "itemtype_id_seq";
ALTER TABLE "ItemType" ALTER COLUMN "id" SET DEFAULT nextval('itemtype_id_seq');
ALTER SEQUENCE "itemtype_id_seq" OWNED BY "ItemType"."id";

-- AlterTable
CREATE SEQUENCE "wearloc_id_seq";
ALTER TABLE "WearLoc" DROP COLUMN "Location",
ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('wearloc_id_seq');
ALTER SEQUENCE "wearloc_id_seq" OWNED BY "WearLoc"."id";
