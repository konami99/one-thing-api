/*
  Warnings:

  - You are about to drop the column `frequency_range` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `min_count` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `min_unit` on the `Goal` table. All the data in the column will be lost.
  - Added the required column `frequencyRange` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minCount` to the `Goal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minUnit` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" DROP COLUMN "frequency_range",
DROP COLUMN "min_count",
DROP COLUMN "min_unit",
ADD COLUMN     "frequencyRange" INTEGER NOT NULL,
ADD COLUMN     "minCount" INTEGER NOT NULL,
ADD COLUMN     "minUnit" TEXT NOT NULL;
