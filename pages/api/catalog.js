import { PrismaClient } from '@prisma/client'
import { translit } from "../../components/translit"

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async (req, res) => {
	const session = await unstable_getServerSession(req, res, authOptions)
	const prisma = new PrismaClient()
	
	if (session) {
		let data = req.body
		const id=data.id
		
		console.log(data)
		// return
		delete data.id
		// data.parent=Number(data.parent)
		data.price=Number(data.price)
		data.sale_price=Number(data.sale_price)
	    let props=data.props
		delete data.preview
		delete data.props
		
		//  if(data.hide=false//) data.hide=false else data.hide=true
		
		// Optional logging to see the responses
		// in the command line where next.js app is running.
		// res.status(200).json({ data: 'ok' })
		let pr
		if(data.delete) {
			pr=await prisma.products.delete({
				where: {
				id: id
				},
				
			})
		}
		else{
		    if(data.is_active=='false') data.is_active=false; else data.is_active=true;
			data.slug=translit(data.title)
			
			console.log('data: ', data)
			pr = await prisma.product_properties.deleteMany({
				where: {
					product_id:  Number(id)
				},
			})
			
			
			
			
			pr=await prisma.products.upsert({
				where: {
					id: Number(id)
				},
				update: data,
				create: data
			})
			let properties=[]
			props.forEach((prop, index) => {
				properties.push({property: prop.property, value: prop.value, product_id: pr.id})
			})
			pr = await prisma.product_properties.createMany({
				data: properties
			})
			// console.log(properties,pr)
		}
		// 
		
		res.json({
			data: "ok"
			//"This is protected content. You can access this content because you are signed in.",
		})
		} else {
		res.json({
			data: "You must be signed in to view the protected content on this page.",
		})
	}
}