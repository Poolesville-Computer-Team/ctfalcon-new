/*
  Warnings:

  - Made the column `ageGroup` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postalCode` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "ageGroup" SET NOT NULL,
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "postalCode" SET NOT NULL;
