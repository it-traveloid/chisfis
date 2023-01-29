-- AlterTable
ALTER TABLE `categories` MODIFY `description` TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `users` ADD COLUMN `assortment` VARCHAR(300) NULL,
    ADD COLUMN `category` VARCHAR(300) NULL,
    ADD COLUMN `city` VARCHAR(100) NULL,
    ADD COLUMN `scheme` VARCHAR(100) NULL,
    ADD COLUMN `site` VARCHAR(300) NULL,
    ADD COLUMN `surname` VARCHAR(300) NULL,
    ADD COLUMN `title` VARCHAR(300) NULL,
    ADD COLUMN `warehouse` VARCHAR(100) NULL;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(300) NULL,
    `status` VARCHAR(300) NULL,
    `description` TEXT NOT NULL DEFAULT '',
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_contents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `sum` DOUBLE NOT NULL DEFAULT 0,
    `ordersId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order_contents` ADD CONSTRAINT `order_contents_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
