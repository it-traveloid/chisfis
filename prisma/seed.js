const {PrismaClient} = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();


async function main() {
    await prisma.users.createMany({
        data: [{
            email: 'admin@mail.com', username: 'admin', password: '12345678',
        }, {
            email: 'user@mail.com', username: 'user', password: '12345678',
        },],
    });

    await prisma.categories.createMany({
        data: [{
            name: "Электроника",
            slug: "elektronika",
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' + 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
        }, {
            name: "Смартфоны",
            slug: "smartfony",
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' + 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
        }, {
            name: "Xiaomi",
            slug: "xiaomi",
            description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' + 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
        },],
    });

    await prisma.product_stores.createMany({
        data: [{
            name: "Поставщик 1", slug: "postavshik1", address: "Москва, улица, дом 1", phone: "+7(777)777-77-77",
        }, {
            name: "Поставщик 2", slug: "postavshik2", address: "Москва, улица, дом 2", phone: "+7(777)777-77-77",
        },],
    });


    for (let i = 0; i < 10; i++) {
        const product = await prisma.products.create({
            data: {
                title: 'Samsung Gear VR',
                vendor: 'Samsung',
                parent: 52,
                price: 100,
                sale_price: 110,
                product_storesId: 1,
                description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' + 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
            },
        });

        const imageUrl = `/uploads/${product.id}${Date.now()}.jpg`;

        fs.copyFile(path.resolve(__dirname, 'seedData/product-image.jpg'), path.resolve(__dirname, '../public/static' + imageUrl), (error) => (error && console.log(error)));

        await prisma.product_images.create({
            data: {
                product_id: product.id,
                url: imageUrl,
            },
        });

        await prisma.product_categories.create({
            data: {
                productsId: product.id,
                categoriesId: 1
            }
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })