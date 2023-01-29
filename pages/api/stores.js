import {PrismaClient} from '@prisma/client'


export default async (req, res) => {
    // const session = await unstable_getServerSession(req, res, authOptions)
    const prisma = new PrismaClient()

    // if (session) {
    const data = req.query
    let pr = []
    if (data.slug)
        pr = await prisma.product_stores.findFirst({
            include: {
                thumbnail: true,
                products: true,
            },
            where: {
                slug: data.slug
            },

        })
    else {
		pr = await prisma.product_stores.findMany({
			include: {
				thumbnail: true,
				products: true,
			},
		})
	}


    res.json(pr)
    // res.json(JSON.stringify(pr) )

    //"This is protected content. You can access this content because you are signed in.",
    //})
    /* } else {
        res.json({
        data: "You must be signed in to view the protected content on this page.",
        })
    } */
}