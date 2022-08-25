-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `email_verified` BOOLEAN NULL,
    `name` VARCHAR(191) NULL,
    `nickname` VARCHAR(191) NULL,
    `picture` VARCHAR(191) NULL,
    `sub` VARCHAR(191) NULL,
    `updated_at` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
