-- AlterTable
ALTER TABLE `categories` MODIFY `description` TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE FULLTEXT INDEX `products_title_idx` ON `products`(`title`);
