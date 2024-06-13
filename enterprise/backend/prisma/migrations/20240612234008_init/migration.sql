-- CreateTable
CREATE TABLE "fridge" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isDiscontinued" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fridge_pkey" PRIMARY KEY ("id")
);
