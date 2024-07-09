/*
  Warnings:

  - You are about to drop the column `sensorId` on the `sensorData` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `sensorData` table. All the data in the column will be lost.
  - Added the required column `name` to the `sensorData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sensorData" DROP COLUMN "sensorId",
DROP COLUMN "value",
ADD COLUMN     "name" TEXT NOT NULL;
