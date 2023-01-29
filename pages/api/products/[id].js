// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function (req, res) {
    console.log(req.query)

    //try { 
	let pr=[]
if (isNaN(Number(req.query.id)))
     pr = await prisma.products.findFirst({

        where: {OR: [
                {slug: req.query.id},

            ],

        },
        include: {
            images: true,
            product_categories: {include: {category: true} },
            properties: true,
            rating: true,
            tags: true,
        },

    })
    else
  
        pr = await prisma.products.findFirst({

            where: {OR: [
                    {id: Number(req.query.id)},

                ],

            },
            include: {
                images: true,
                product_categories: {include: {category: true} },
                properties: true,
                rating: true,
                tags: true,
            },

        })

    // console.log(pr.properties)



    res.status(200).json({ data: pr })
}

