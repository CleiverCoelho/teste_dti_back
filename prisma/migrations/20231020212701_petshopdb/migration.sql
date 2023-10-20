-- CreateTable
CREATE TABLE "petshop" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "weekDayBigPrice" DOUBLE PRECISION NOT NULL,
    "weekDaySmallPrice" DOUBLE PRECISION NOT NULL,
    "weekEndBigPrice" DOUBLE PRECISION NOT NULL,
    "weekEndSmallPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "petshop_pkey" PRIMARY KEY ("id")
);
