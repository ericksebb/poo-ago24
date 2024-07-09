/*
  Warnings:

  - You are about to drop the `sensor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sensorData" DROP CONSTRAINT "sensorData_sensorId_fkey";

-- DropTable
DROP TABLE "sensor";
