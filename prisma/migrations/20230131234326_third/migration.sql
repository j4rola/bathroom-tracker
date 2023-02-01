-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cleaning" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cleanedBy" TEXT NOT NULL,
    "cleanedDate" TEXT NOT NULL,
    "timer" TEXT NOT NULL
);
INSERT INTO "new_Cleaning" ("cleanedBy", "cleanedDate", "id", "timer") SELECT "cleanedBy", "cleanedDate", "id", "timer" FROM "Cleaning";
DROP TABLE "Cleaning";
ALTER TABLE "new_Cleaning" RENAME TO "Cleaning";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
