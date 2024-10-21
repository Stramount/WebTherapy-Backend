-- CreateTable
CREATE TABLE `Room` (
    `UUID` VARCHAR(191) NOT NULL,
    `Lifetime` DATETIME(3) NOT NULL,
    `userIsPublic` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `UUID` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Codes` (
    `UUID` VARCHAR(191) NOT NULL,
    `Code` VARCHAR(191) NOT NULL,
    `isActivated` BOOLEAN NOT NULL DEFAULT false,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `UUID` VARCHAR(191) NOT NULL,
    `Message` VARCHAR(191) NOT NULL,
    `Valoration` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Psychiatrist` (
    `UUID` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Certify` BOOLEAN NOT NULL DEFAULT false,
    `Presentation` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coach` (
    `UUID` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Certify` BOOLEAN NOT NULL DEFAULT false,
    `Presentation` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consultor` (
    `UUID` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Certify` BOOLEAN NOT NULL DEFAULT false,
    `Presentation` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Specialization` (
    `UUID` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeConsulted` (
    `UUID` VARCHAR(191) NOT NULL,
    `IDConsulted` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Note` (
    `UUID` VARCHAR(191) NOT NULL,
    `consultedId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stats` (
    `UUID` VARCHAR(191) NOT NULL,
    `RoomQuantity` INTEGER NOT NULL,

    PRIMARY KEY (`UUID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PsychiatristToSpecialization` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PsychiatristToSpecialization_AB_unique`(`A`, `B`),
    INDEX `_PsychiatristToSpecialization_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CoachToSpecialization` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CoachToSpecialization_AB_unique`(`A`, `B`),
    INDEX `_CoachToSpecialization_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConsultorToSpecialization` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ConsultorToSpecialization_AB_unique`(`A`, `B`),
    INDEX `_ConsultorToSpecialization_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`UUID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Codes` ADD CONSTRAINT `Codes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`UUID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`UUID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypeConsulted` ADD CONSTRAINT `TypeConsulted_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`UUID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_consultedId_fkey` FOREIGN KEY (`consultedId`) REFERENCES `TypeConsulted`(`UUID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Note` ADD CONSTRAINT `Note_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`UUID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PsychiatristToSpecialization` ADD CONSTRAINT `_PsychiatristToSpecialization_A_fkey` FOREIGN KEY (`A`) REFERENCES `Psychiatrist`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PsychiatristToSpecialization` ADD CONSTRAINT `_PsychiatristToSpecialization_B_fkey` FOREIGN KEY (`B`) REFERENCES `Specialization`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CoachToSpecialization` ADD CONSTRAINT `_CoachToSpecialization_A_fkey` FOREIGN KEY (`A`) REFERENCES `Coach`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CoachToSpecialization` ADD CONSTRAINT `_CoachToSpecialization_B_fkey` FOREIGN KEY (`B`) REFERENCES `Specialization`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConsultorToSpecialization` ADD CONSTRAINT `_ConsultorToSpecialization_A_fkey` FOREIGN KEY (`A`) REFERENCES `Consultor`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConsultorToSpecialization` ADD CONSTRAINT `_ConsultorToSpecialization_B_fkey` FOREIGN KEY (`B`) REFERENCES `Specialization`(`UUID`) ON DELETE CASCADE ON UPDATE CASCADE;
