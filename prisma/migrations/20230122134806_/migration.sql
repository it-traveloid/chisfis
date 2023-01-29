/*
  Warnings:

  - Added the required column `productsId` to the `order_contents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` MODIFY `description` TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `order_contents` ADD COLUMN `productsId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `type` VARCHAR(100) NULL,
    MODIFY `description` TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `users` ADD COLUMN `uuid` VARCHAR(300) NULL;

-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usersid` VARCHAR(300) NULL,
    `question` VARCHAR(500) NULL,
    `email` VARCHAR(300) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order_contents` ADD CONSTRAINT `order_contents_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
