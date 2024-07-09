/*
  Warnings:

  - A unique constraint covering the columns `[sensor_id]` on the table `sensorData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sensor_id` to the `sensorData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sensorData" ADD COLUMN     "sensor_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "sensorData_sensor_id_key" ON "sensorData"("sensor_id");
