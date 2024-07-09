/*
  Warnings:

  - You are about to drop the column `createdAt` on the `sensor` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `sensor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sensor" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "sensorData" (
    "id" SERIAL NOT NULL,
    "sensorId" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sensorData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sensorData" ADD CONSTRAINT "sensorData_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
