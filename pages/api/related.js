// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function (req, res) {
	console.log(req.query)
	
	//try {
	let pr = await prisma.order_contents.findMany({
		where: {
			productsId: Number(req.query.id)
		},
	})
	let orders=[],products=[]
	for(const fe of pr){
		orders.push(fe.ordersId)
	}
	 pr = await prisma.order_contents.findMany({
	    include: {product: {include: {images: true, }} },
		where: {
			ordersId: {in: orders}
		},
	})
	
	for(const fe of pr){
	    fe.product.thumbnail=fe.product.images[0]
		products.push(fe.product)
	}
	console.log('result bought',pr)
	
	
	
	res.status(200).json({ items: products })
}
