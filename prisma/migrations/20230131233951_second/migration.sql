/*
  Warnings:

  - You are about to alter the column `timer` on the `Cleaning` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cleaning" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cleanedBy" TEXT NOT NULL,
    "cleanedDate" TEXT NOT NULL,
    "timer" BIGINT NOT NULL
);
INSERT INTO "new_Cleaning" ("cleanedBy", "cleanedDate", "id", "timer") SELECT "cleanedBy", "cleanedDate", "id", "timer" FROM "Cleaning";
DROP TABLE "Cleaning";
ALTER TABLE "new_Cleaning" RENAME TO "Cleaning";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
