import { PrismaClient } from '@prisma/client'
import { translit } from "../../components/translit"

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async (req, res) => {
	const session = await unstable_getServerSession(req, res, authOptions)
	const prisma = new PrismaClient()
	
	let data = req.body
	const id=Number(data.id)
	
	console.log(data)
	// return
	delete data.id
	// data.parent=Number(data.parent)
	
	let pr
	if(data.delete) {
		pr=await prisma.ratings.delete({
			where: {
				id: id
			},
			
		})
	}
	else{
		data.productsId=id
		
		pr=await prisma.ratings.create({
			// where: {
			// id: Number(id)
			// },
			//update: data,
			data: data
		})
		
	}
	// 
	
	res.json({
		data: "ok"
		//"This is protected content. You can access this content because you are signed in.",
	})
	
}