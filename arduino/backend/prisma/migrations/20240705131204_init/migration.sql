/*
  Warnings:

  - You are about to drop the `sensorData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sensorData";

-- CreateTable
CREATE TABLE "register" (
    "id" SERIAL NOT NULL,
    "sensor_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "register_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "register_sensor_id_key" ON "register"("sensor_id");
