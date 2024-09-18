-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "frequency_range" INTEGER NOT NULL,
    "min_count" INTEGER NOT NULL,
    "min_unit" TEXT NOT NULL,
    "streak" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
