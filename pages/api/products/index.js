import {PrismaClient} from '@prisma/client'

export default async function (req, res) {
    const {method} = req;

    const prisma = new PrismaClient()

    if (method === "GET") {
        let {keyword, category, skip = 0, take = 10} = req.query;
        let products;
        let count;

        if (category) {
            category = Number(category);
        }
        skip = Number(skip);
        take = Number(take);

        const args = {
            skip,
            take,
            include: {
                images: true,
                product_categories: {include: {category: true}},
                properties: true,
                rating: true,
                tags: true,
            },
        };

        if (keyword) {
            products = await prisma.products.findMany({
                skip,
                take,
                where: {
                    title: {contains: keyword},
                },
                include: {
                    images: true,
                    product_categories: {
                        where: {categoriesId: category},
                        include: {category: true}
                    },
                    properties: true,
                    rating: true,
                    tags: true,
                },
            });
            count = await prisma.products.count({where: {title: {contains: keyword}}});

        } else {
            products = await prisma.products.findMany(args);
            count = await prisma.products.count();
        }
         
        if (products.length > 0) {
		    let productsRes=[]
			for(const fe of products){
			    
			    if(fe.images.length>0) fe.thumbnail=fe.images[0]
				else fe.thumbnail={}
				
				productsRes.push(fe)
			}
			products=productsRes
		console.log(products)
            res.status(200).json({data: {products, count}});
        } else {
            res.status(200).json({error: "Not found"});
        }

    } else {
        res.status(404).json({message: "Not found"});
    }
}
